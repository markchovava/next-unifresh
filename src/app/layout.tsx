import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Unifresh",
  description: "Unifresh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body className="min-h-full w-full">{children}</body>
    </html>
  );
}
