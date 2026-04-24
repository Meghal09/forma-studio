import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

const SKIP_DIRS = new Set(["node_modules", ".next", "control-panel"]);

function cleanLabel(name: string): string {
  return name
    .replace(/^\d+-/, "")
    .replace(/\.(md|html)$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function DirectoryListing({ filePath, slug }: { filePath: string; slug: string[] }) {
  const entries = fs.readdirSync(filePath).filter((item) => {
    const full = path.join(filePath, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) return !SKIP_DIRS.has(item);
    return item.endsWith(".md") || item.endsWith(".html");
  });

  const basePath = "/docs/" + slug.join("/");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{cleanLabel(slug[slug.length - 1])}</h1>
      <ul className="space-y-2">
        {entries.map((entry) => {
          const full = path.join(filePath, entry);
          const isDir = fs.statSync(full).isDirectory();
          return (
            <li key={entry}>
              <Link
                href={`${basePath}/${entry}`}
                className="flex items-center gap-2 p-3 rounded bg-gray-900 hover:bg-gray-800 transition-colors"
              >
                <span className="text-gray-500">{isDir ? "📁" : "📄"}</span>
                <span>{cleanLabel(entry)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "..", "content", ...slug);

  let stat: fs.Stats;
  try {
    stat = fs.statSync(filePath);
  } catch {
    return <p className="text-red-400">Not found: /{slug.join("/")}</p>;
  }

  if (stat.isDirectory()) {
    return <DirectoryListing filePath={filePath} slug={slug} />;
  }

  let file: string;
  try {
    file = fs.readFileSync(filePath, "utf8");
  } catch {
    return <p className="text-red-400">Could not read file: /{slug.join("/")}</p>;
  }

  if (filePath.endsWith(".html")) {
    return (
      <div
        className="prose prose-invert max-w-none p-6"
        dangerouslySetInnerHTML={{ __html: file }}
      />
    );
  }

  const parsed = matter(file);
  const processed = await remark().use(gfm).use(html).process(parsed.content);
  const contentHtml = processed.toString();

  return (
    <div
      className="prose prose-invert max-w-none p-6"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
