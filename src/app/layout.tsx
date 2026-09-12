import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HolyBookOfGood.Org T.V. 2.0 | Autonomous Media Network",
  description:
    "A comfortable, natural journey into the global ecosystem. Experience the alignment of human geometry and raw frequencies.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌍</text></svg>",
  },
  openGraph: {
    title: "HolyBookOfGood.Org T.V. 2.0 | Autonomous Network",
    description:
      "A comfortable, natural journey into the global ecosystem. Experience the alignment of human geometry and raw frequencies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-neutral-950 text-neutral-100 font-sans antialiased min-h-screen selection:bg-pink-500/30 selection:text-pink-200">
        {children}
      </body>
    </html>
  );
}
