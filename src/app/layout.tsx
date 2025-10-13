import type { Metadata } from "next";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { LanguageProvider } from "../context/LanguageContext";


export const metadata: Metadata = {
  title: "Portofolio Banyu",
  description: "Personal profile website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
       <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
