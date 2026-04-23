import Link from "next/link";
import fs from "fs";
import path from "path";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const contentPath = path.join(process.cwd(), "..", "content");
  const items = fs.readdirSync(contentPath);

  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="w-64 border-r border-gray-800 p-4">
        <h2 className="text-xl font-bold mb-4">📁 Documentation</h2>

        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item}>
              <Link
                href={`/docs/${item}`}
                className="block p-2 rounded hover:bg-gray-800"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}
