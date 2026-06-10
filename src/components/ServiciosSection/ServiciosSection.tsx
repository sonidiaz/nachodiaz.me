import styles from "./ServiciosSection.module.css";

const CARDS = [
  {
    num: "1",
    tag: "Mayor valor · Recurrente",
    tagType: "green",
    titulo: "Staff / Arquitecto Frontend",
    sub: "Liderazgo técnico transversal sin gestión directa de personas",
    items: [
      "Modernización incremental de plataformas legacy",
      "Estándares de arquitectura, testing y observabilidad",
      "Influencia técnica entre equipos de producto y engineering",
      "Visión de plataforma a largo plazo",
    ],
    delay: "",
  },
  {
    num: "2",
    tag: "Recurrente · Estándares",
    tagType: "gray",
    titulo: "Tech Lead con foco en DX y calidad",
    sub: "Cultura de ingeniería que escala con el equipo",
    items: [
      "Design systems y catálogos de componentes",
      "Performance, Lighthouse y métricas de salud técnica",
      "Developer Experience y tooling moderno",
      "Onboarding técnico de nuevos ingenieros",
    ],
    delay: "r2",
  },
  {
    num: "3",
    tag: "Diferencial · IA aplicada",
    tagType: "amber",
    titulo: "Frontend Engineer con IA integrada",
    sub: "Adopción real de IA en producto y en desarrollo",
    items: [
      "Integración de LLMs en producto (Claude, OpenAI)",
      "Automatización de workflows de desarrollo con Claude Code",
      "Reducción de tiempo de entrega de semanas a días",
      "Formación del equipo en AI-assisted development",
    ],
    delay: "",
  },
  {
    num: "4",
    tag: "Puntual · Ejecución",
    tagType: "gray",
    titulo: "Senior Frontend Engineer de producto",
    sub: "Entrega rápida con criterio técnico sólido",
    items: [
      "MVPs y prototipos funcionales en semanas",
      "Stack completo: React, Next.js, WordPress, APIs",
      "Integración con plataformas EdTech (LMS, certificaciones)",
      "Refuerzo puntual en equipos con picos de carga",
    ],
    delay: "r2",
  },
];

export default function ServiciosSection() {
  return (
    <section className={styles.section} id="enfoque">
      <div className={styles.inner}>
        <p className={`${styles.eyebrow} reveal`}>Dónde aporto valor</p>
        <h2 className={`${styles.title} reveal r2`}>
          Tech con propósito. Cuatro formas de colaborar.
        </h2>
        <p className={`${styles.intro} reveal r2`}>
          Hay empresas donde la tecnología no es solo el producto — es la forma de cambiar algo
          que importa. Eso es lo que me mueve. Trabajo en cuatro niveles según lo que necesite
          el proyecto.
        </p>

        <div className={styles.grid}>
          {CARDS.map((c) => (
            <div key={c.num} className={`${styles.card} reveal ${c.delay}`}>
              <div className={styles.num}>{c.num}</div>
              <span className={`${styles.tag} ${styles[`tag${c.tagType.charAt(0).toUpperCase() + c.tagType.slice(1)}` as keyof typeof styles]}`}>
                {c.tag}
              </span>
              <p className={styles.cardTitle}>{c.titulo}</p>
              <p className={styles.cardSub}>{c.sub}</p>
              <div className={styles.items}>
                {c.items.map((item) => (
                  <div key={item} className={styles.item}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
