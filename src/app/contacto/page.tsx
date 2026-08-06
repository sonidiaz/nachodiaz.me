import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";
import ContactForm from "./ContactForm";
import styles from "./contacto.module.css";

export const metadata: Metadata = {
  title: "Contacto — Nacho Díaz",
  description: "¿Tienes un proyecto con propósito? Escríbeme y hablamos.",
};

const LINKS = [
  { nombre: "Email",    url: "nachodiaz8@gmail.com",     href: "mailto:nachodiaz8@gmail.com" },
  { nombre: "LinkedIn", url: "linkedin.com/in/sonidiaz", href: "https://www.linkedin.com/in/sonidiaz/", external: true },
  { nombre: "GitHub",   url: "github.com/sonidiaz",      href: "https://github.com/sonidiaz/",          external: true },
];

const DISPONIBILIDAD = [
  "Posiciones Staff / Senior · Frontend, Fullstack o plataforma",
  "EdTech, HealthTech, impacto social",
  "Remoto o híbrido en España",
  "Colaboración con La Cabrera.eco en paralelo",
  "Proyectos freelance puntuales",
];

export default function ContactoPage() {
  return (
    <>
      <main className={styles.main}>

        <div className={styles.header}>
          <p className={styles.eyebrow}>Contacto</p>
          <h1 className={styles.titulo}>¿Construimos<br /><em>algo que importe?</em></h1>
          <p className={styles.sub}>
            Si trabajas en un producto con propósito y buscas a alguien que combine criterio
            técnico, visión estratégica y experiencia real con IA, escríbeme.
          </p>
        </div>

        <div className={styles.body}>
          {/* Columna izquierda — info */}
          <div className={styles.info}>
            <div className={styles.links}>
              {LINKS.map((l) => (
                <a
                  key={l.nombre}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className={styles.link}
                >
                  <span className={styles.linkNombre}>{l.nombre}</span>
                  <span className={styles.linkUrl}>{l.url}</span>
                </a>
              ))}
            </div>

            <div className={styles.disponible}>
              <p className={styles.cdisLabel}>Disponibilidad actual</p>
              <p className={styles.cdisTitulo}>Abierto a nuevas oportunidades</p>
              <div className={styles.cdisItems}>
                {DISPONIBILIDAD.map((d) => (
                  <div key={d} className={styles.cdisItem}>{d}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha — formulario */}
          <ContactForm />
        </div>

      </main>
      <Footer />
    </>
  );
}
