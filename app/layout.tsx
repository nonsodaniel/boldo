import "./globals.css";
import type { Metadata } from "next";
import { Viewport } from "next/dist/lib/metadata/types/extra-types";
import { Manrope } from "next/font/google";
const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boldo",
  description: "The Bold Platform",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
