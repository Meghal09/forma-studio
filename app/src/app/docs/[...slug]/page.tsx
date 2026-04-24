import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

const ALLOWED_EXTENSIONS = new Set([".md", ".html"]);
const BLOCKED_DIRS = new Set(["control-panel", "node_modules", ".next"]);

function isAllowedSlug(slug: string[]): boolean {
  // Block any segment that is a known non-doc directory
  if (slug.some((segment) => BLOCKED_DIRS.has(segment))) return false;
  // Block path traversal attempts
  if (slug.some((segment) => segment === ".." || segment === ".")) return false;
  return true;
}

function cleanLabel(name: string): string {
  return name
    .replace(/^\d+-/, "")
    .replace(/\.(md|html)$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function DirectoryListing({ filePath, slug }: { filePath: string; slug: string[] }) {
  const entries = fs.readdirSync(filePath).filter((item) => {
    if (BLOCKED_DIRS.has(item)) return false;
    const full = path.join(filePath, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) return true;
    return ALLOWED_EXTENSIONS.has(path.extname(item));
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

  if (!isAllowedSlug(slug)) notFound();

  const filePath = path.join(process.cwd(), "..", "content", ...slug);

  // Ensure the resolved path stays inside content/ (guards against symlink escapes)
  const contentRoot = path.resolve(process.cwd(), "..", "content");
  if (!path.resolve(filePath).startsWith(contentRoot + path.sep) &&
      path.resolve(filePath) !== contentRoot) {
    notFound();
  }

  let stat: fs.Stats;
  try {
    stat = fs.statSync(filePath);
  } catch {
    notFound();
  }

  if (stat.isDirectory()) {
    return <DirectoryListing filePath={filePath} slug={slug} />;
  }

  // Enforce extension allowlist for files
  if (!ALLOWED_EXTENSIONS.has(path.extname(filePath))) notFound();

  const file = fs.readFileSync(filePath, "utf8");

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
