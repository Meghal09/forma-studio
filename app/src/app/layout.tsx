import "./globals.css";

export const metadata = {
  title: "Forma Studio",
  description: "SaaS Control Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
