import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV Analyzer",
  description: "Get AI-powered feedback on your CV and find the best jobs for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
