import type { Metadata } from "next";
import { Onest } from "next/font/google";
import Nav from "@/components/Nav/Nav";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nacho Díaz — Software Engineer",
  description:
    "+10 años diseñando y evolucionando plataformas digitales. Especializado en modernización de sistemas legacy, arquitectura React y adopción de IA.",
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
