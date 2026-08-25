import styles from "./ProyectosSection.module.css";

const PROYECTOS = [
  {
    empresa: "LaCabrera.eco",
    titulo: "EcoMap: mapeo de redes de colaboradores por cercanía",
    desc: "EcoMap visualiza una red de colaboradores como un grafo orbital: cada actor se posiciona según un proximity score calculado automáticamente y clasificado en órbitas de cercanía.",
    tags: ["Next.js", "TypeScript", "Prisma", "React Flow"],
    href: undefined,
    delay: "",
  },
  {
    empresa: "RTVE.es",
    titulo: "API y panel de datos para infografías de RTVE",
    desc: "Backend en PHP que actúa como API y panel de administración de datos: transforma hojas de cálculo de Google Sheets en JSON servido públicamente, con un dashboard para regenerar y monitorizar cachés y un panel para gestionar las fuentes de datos sin tocar código.",
    tags: ["PHP", "API", "Backend", "Caché JSON"],
    href: undefined,
    delay: "",
  },
  {
    empresa: "RTVE.es · 2025",
    titulo: "Precio de la vivienda: ¿comprar o alquilar en España?",
    desc: "Módulos interactivos que componen un dashboard de datos en formato narrativa de noticia.",
    tags: ["React", "D3", "Observable Plot", "Claude Code"],
    href: "https://www.rtve.es/noticias/20251024/precio-vivienda-comprar-alquilar-espana/16783222.shtml",
    delay: "",
  },
  {
    empresa: "LightU · 2025",
    titulo: "Plataforma educativo con IA que te orienta sobre qué estudiar",
    desc: "Evolución del MVP a plataforma de contenido y comunidad con Payload CMS.",
    tags: ["EdTech", "NextJS", "PostgreSQL"],
    href: undefined,
    delay: "",
  },
];

export default function ProyectosSection() {
  return (
    <>
      <div style={{ borderTop: "1px solid var(--line)" }} />
      <section className={styles.section} id="trabajo">
        <div className={styles.inner}>
          {/* <p className={`${styles.eyebrow} reveal`}>Proyectos recientes</p> */}
          <h2 className={`${styles.title} reveal r2`}>Proyectos recientes</h2>
          {/* <p className={`${styles.intro} reveal r2`}>
            Piezas construidas en producción, con usuarios reales. Cada una entregada más
            rápido y con más criterio gracias a la IA como copiloto de desarrollo.
          </p> */}

          <div className={styles.grid}>
            {PROYECTOS.map((p) => {
              const cardClass = `${styles.card} reveal ${p.delay}`;
              const content = (
                <>
                  <p className={styles.cardEmpresa}>{p.empresa}</p>
                  <h3 className={styles.cardTitle}>{p.titulo}</h3>
                  <p className={styles.cardDesc}>{p.desc}</p>
                  <div className={styles.tags}>
                    {p.tags.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </>
              );

              return p.href ? (
                <a
                  key={p.titulo}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {content}
                </a>
              ) : (
                <div key={p.titulo} className={cardClass}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
