import fs from "fs";
import path from "path";
import Link from "next/link";

export default function FolderPage({ params }: { params: { folder: string } }) {
  const folderPath = path.join(process.cwd(), "..", "content", params.folder);
  const items = fs.readdirSync(folderPath);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{params.folder}</h1>

      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item}>
            <Link
              href={`/docs/${params.folder}/${item}`}
              className="block p-2 rounded bg-gray-900 hover:bg-gray-800"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
