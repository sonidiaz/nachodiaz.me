import type { Metadata } from "next";
import ProyectosClient from "./ProyectosClient";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Proyectos — Nacho Díaz",
  description: "Selección de trabajos donde he aplicado tecnología para crear soluciones útiles y significativas.",
};

export default function ProyectosPage() {
  return (
    <>
      <ProyectosClient />
      <Footer />
    </>
  );
}
