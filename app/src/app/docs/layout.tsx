import fs from "fs";
import path from "path";
import Link from "next/link";
import NavLink from "./NavLink";

const SKIP = new Set(["control-panel", "control-panel.html", "README.md"]);

function cleanLabel(name: string): string {
  return name
    .replace(/^\d+-/, "")
    .replace(/\.(md|html)$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

interface SidebarSection {
  name: string;
  label: string;
  files: string[];
}

function buildSections(contentPath: string): SidebarSection[] {
  return fs
    .readdirSync(contentPath)
    .filter((item) => {
      if (SKIP.has(item)) return false;
      const full = path.join(contentPath, item);
      return fs.statSync(full).isDirectory();
    })
    .sort()
    .map((dir) => {
      const dirPath = path.join(contentPath, dir);
      const files = fs
        .readdirSync(dirPath)
        .filter((f) => {
          const full = path.join(dirPath, f);
          return (
            !fs.statSync(full).isDirectory() &&
            (f.endsWith(".md") || f.endsWith(".html"))
          );
        })
        .sort();
      return { name: dir, label: cleanLabel(dir), files };
    });
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const contentPath = path.join(process.cwd(), "..", "content");
  const sections = buildSections(contentPath);

  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="w-64 shrink-0 border-r border-gray-800 overflow-y-auto">
        <div className="p-4 border-b border-gray-800">
          <Link href="/" className="text-lg font-bold tracking-tight hover:text-gray-300 transition-colors">
            Forma Studio
          </Link>
          <p className="text-xs text-gray-500 mt-0.5">Documentation</p>
        </div>

        <nav className="p-3 space-y-1">
          <NavLink href="/docs">Overview</NavLink>

          {sections.map((section) => (
            <div key={section.name} className="pt-2">
              <NavLink href={`/docs/${section.name}`} className="font-medium text-gray-300">
                {section.label}
              </NavLink>
              {section.files.length > 0 && (
                <div className="ml-3 mt-1 space-y-0.5 border-l border-gray-800 pl-3">
                  {section.files.map((file) => (
                    <NavLink
                      key={file}
                      href={`/docs/${section.name}/${file}`}
                    >
                      {cleanLabel(file)}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8 overflow-auto max-w-4xl">
        {children}
      </main>
    </div>
  );
}
