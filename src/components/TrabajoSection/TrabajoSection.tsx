import styles from "./TrabajoSection.module.css";

const PROYECTOS = [
  {
    href: "https://www.rtve.es/noticias/20260601/arquitecto-aprendio-naturaleza/17093606.shtml",
    empresa: "RTVE.es · 2026",
    titulo: "El arquitecto que aprendió de la naturaleza",
    desc: "Narrativa digital interactiva con componentes React custom sobre biomímesis y arquitectura. Diseño y desarrollo completo en un día con Claude Code.",
    tags: ["React", "Narrativa digital", "Claude Code", "TypeScript"],
    delay: "",
  },
  {
    href: "https://www.rtve.es/noticias/20251024/precio-vivienda-comprar-alquilar-espana/16783222.shtml",
    empresa: "RTVE.es · 2025",
    titulo: "Precio de la vivienda: ¿comprar o alquilar en España?",
    desc: "Módulo interactivo de datos con lógica comparativa compleja, visualizaciones y filtros por comunidad autónoma. Antes: 1 mes. Con IA: 1 día.",
    tags: ["React", "Datos interactivos", "Vite", "Claude Code"],
    delay: "r2",
  },
  {
    href: "https://www.bergmedical.cl/",
    empresa: "BergMedical · 2023",
    titulo: "Plataforma ecommerce médica con Next.js headless",
    desc: "Desarrollo Next.js con WooCommerce como headless CMS, SSR para SEO y CI/CD automático en Vercel. Integración de WhatsApp con prellenado dinámico.",
    tags: ["Next.js", "WooCommerce", "SSR", "Vercel"],
    delay: "",
  },
  {
    href: "https://github.com/sonidiaz/univhack22",
    empresa: "BeForGet · 2022",
    titulo: "Plataforma EdTech con LMS, certificaciones y comunidad",
    desc: "Integración Accredible para certificaciones automáticas, Slack para notificaciones, dashboard React/Next.js de resultados y mini-app Vue.js + WebGL con gestos faciales.",
    tags: ["EdTech", "React", "LMS", "WebGL"],
    delay: "r2",
  },
];

export default function TrabajoSection() {
  return (
    <>
      <div style={{ borderTop: "0.5px solid var(--line)" }} />
      <section id="trabajo" className={`${styles.section} reveal`}>
        <p className={styles.eyebrow}>Proyectos recientes</p>
        <h2 className={styles.h2}>
          Trabajo que <em>puede verse.</em>
        </h2>
        <p className={styles.intro}>
          Piezas construidas en producción, con usuarios reales. Cada una construida más
          rápido y con más criterio gracias a la IA como copiloto de desarrollo.
        </p>

        <div className={styles.grid}>
          {PROYECTOS.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} reveal ${p.delay}`}
            >
              <p className={styles.empresa}>{p.empresa}</p>
              <h3 className={styles.titulo}>{p.titulo}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
