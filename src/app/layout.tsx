import type { Metadata } from "next";
import { Onest } from "next/font/google";
import Nav from "@/components/Nav/Nav";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
});

const SITE_URL = "https://nachodiaz.me";
const TITLE = "Nacho Díaz — Software Engineer";
const DESCRIPTION =
  "+10 años diseñando y evolucionando plataformas digitales. Especializado en modernización de sistemas legacy, arquitectura React y adopción de IA.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: "/favicon--curly.svg",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Nacho Díaz",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
    creator: "@sonidiaz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={onest.variable}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
