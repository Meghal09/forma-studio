import Link from "next/link";

const features = [
  {
    icon: "🤖",
    title: "AI Agent System",
    description:
      "12 specialized marketing agents — from SEO and copywriting to paid ads, email, and analytics — orchestrated under a unified director hierarchy.",
  },
  {
    icon: "⚙️",
    title: "Marketing Systems",
    description:
      "Modular content, funnel, automation, and analytics systems built for autonomous operation with minimal human oversight.",
  },
  {
    icon: "📦",
    title: "Product Suite",
    description:
      "Five AI-powered marketing products: Marketing Suite, Content Generator, SEO Suite, Email Suite, and Automation Suite.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="border-b border-gray-800 px-8 py-4 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight">Forma Studio</span>
        <Link
          href="/docs"
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          Documentation →
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-8 py-24 text-center">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">
            FMID — Forma Marketing Intelligence Division
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight mb-6">
            Autonomous AI-Powered
            <br />
            Marketing Intelligence
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            A fully modular marketing division powered by coordinated AI agents.
            Automate content, SEO, ads, email, funnels, and analytics — at scale.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              View Documentation
            </Link>
            <Link
              href="/docs/02-ai-agents"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-full hover:border-gray-500 transition-colors text-gray-300"
            >
              Meet the Agents
            </Link>
          </div>
        </div>
      </main>

      <section className="px-8 pb-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-colors"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-800 px-8 py-6 text-center text-xs text-gray-600">
        © 2026 Forma Studio — FMID
      </footer>
    </div>
  );
}
