import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

export default async function DocPage({ params }: { params: { slug: string[] } }) {
  const filePath = path.join(process.cwd(), "..", "content", ...params.slug);
  const file = fs.readFileSync(filePath, "utf8");

  // If HTML file → render directly
  if (filePath.endsWith(".html")) {
    return (
      <div
        className="prose prose-invert max-w-none p-6"
        dangerouslySetInnerHTML={{ __html: file }}
      />
    );
  }

  // Markdown or text → convert to HTML
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
