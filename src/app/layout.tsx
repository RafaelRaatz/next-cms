import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { Header } from "@/components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DevMotors",
  description: "Sua oficina especializada",
  keywords: ["ofinicia", "oficina de carros", "carros", "manutenção"],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <p style={{ textAlign: "center", marginTop: 54, marginBottom: 24 }}>
          Todos os direitos reservados @{`${new Date().getFullYear()}`}
        </p>
      </body>
    </html>
  );
}
