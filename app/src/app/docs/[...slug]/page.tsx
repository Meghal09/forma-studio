import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "..", "content", ...slug);
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
