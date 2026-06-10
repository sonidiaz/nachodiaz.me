import styles from "./EnfoqueSection.module.css";

const CARDS = [
  {
    num: "1",
    tag: "Mayor valor · Recurrente",
    tagClass: "tVerde",
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
    tagClass: "tGris",
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
    tagClass: "tAmber",
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
    tagClass: "tGris",
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

export default function EnfoqueSection() {
  return (
    <section id="enfoque" className={`${styles.section} reveal`}>
      <p className={styles.eyebrow}>Dónde aporto valor</p>
      <h2 className={styles.h2}>
        Tech con propósito. <em>Cuatro formas de colaborar.</em>
      </h2>
      <p className={styles.intro}>
        Hay empresas donde la tecnología no es solo el producto — es la forma de cambiar algo
        que importa. Eso es lo que me mueve. Trabajo en cuatro niveles según lo que necesite
        el proyecto.
      </p>

      <div className={styles.grid}>
        {CARDS.map((c) => (
          <div key={c.num} className={`${styles.card} reveal ${c.delay}`}>
            <div className={styles.num}>{c.num}</div>
            <span className={`${styles.tag} ${styles[c.tagClass as keyof typeof styles]}`}>
              {c.tag}
            </span>
            <p className={styles.titulo}>{c.titulo}</p>
            <p className={styles.sub}>{c.sub}</p>
            <div className={styles.items}>
              {c.items.map((item) => (
                <div key={item} className={styles.item}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
