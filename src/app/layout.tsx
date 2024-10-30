import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "World.io",
  description: "Explorando Ideias que Transformam o Mundo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-sm md:max-w-7xl">
        {children}
      </body>
    </html>
  );
}
