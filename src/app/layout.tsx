import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gold Bread — O Autêntico Pão Libanês",
  description: "Tradição familiar, fermentação natural e assamento artesanal em forno de pedra. O legítimo pão libanês com bolsão perfeito, maciez e sabor inigualável.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${playfair.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#3E2723] antialiased selection:bg-[#F2A900] selection:text-[#3E2723]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
