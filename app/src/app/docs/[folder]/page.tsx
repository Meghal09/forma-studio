import fs from "fs";
import path from "path";
import Link from "next/link";

function cleanName(name: string): string {
  return name
    .replace(/^\d+-/, "")
    .replace(/\.(md|html)$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default async function FolderPage({ params }: { params: Promise<{ folder: string }> }) {
  const { folder } = await params;
  const folderPath = path.join(process.cwd(), "..", "content", folder);
  const stat = fs.statSync(folderPath);

  if (!stat.isDirectory()) {
    return <p className="text-red-400">Not a directory.</p>;
  }

  const items = fs.readdirSync(folderPath).filter((item) => {
    const full = path.join(folderPath, item);
    const isDir = fs.statSync(full).isDirectory();
    if (isDir) return !["node_modules", ".next", "control-panel"].includes(item);
    return item.endsWith(".md") || item.endsWith(".html");
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{cleanName(folder)}</h1>
      <ul className="space-y-2">
        {items.map((item) => {
          const full = path.join(folderPath, item);
          const isDir = fs.statSync(full).isDirectory();
          return (
            <li key={item}>
              <Link
                href={`/docs/${folder}/${item}`}
                className="flex items-center gap-2 p-3 rounded bg-gray-900 hover:bg-gray-800 transition-colors"
              >
                <span className="text-gray-500">{isDir ? "📁" : "📄"}</span>
                <span>{cleanName(item)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
