import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hover Cards",
  description: "Een voorbeeld van hover cards met Next.js en Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
