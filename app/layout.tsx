import type { Metadata, Viewport } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seminario de Judo Tamo Junto! Costa Rica 2026 | Moacir Méndez",
  description: "Seminario de Judo Tamo Junto! Costa Rica 2026 | Moacir Méndez",
  keywords: ["Seminario Tamo Junto!", "Costa Rica 2026", "Moacir Méndez"],
  openGraph: {
    title: "Seminario de Judo Tamo Junto! Costa Rica 2026 | Moacir Méndez",
    description: "Seminario Tamo Junto! Costa Rica 2026 | Moacir Méndez",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seminario Tamo Junto! Costa Rica 2026 | Moacir Méndez",
    description: "Seminario Tamo Junto! Costa Rica 2026 | Moacir Méndez",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${lora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
