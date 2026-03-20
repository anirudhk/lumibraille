import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tactora | Dynamic Braille Learning Devices",
  description:
    "Affordable tactile learning devices empowering blind students with literacy and STEM access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
