import styles from "./ContactoSection.module.css";

const LINKS = [
  { nombre: "Email",    url: "nachodiaz8@gmail.com",      href: "mailto:nachodiaz8@gmail.com",              external: false },
  { nombre: "LinkedIn", url: "linkedin.com/in/sonidiaz",  href: "https://www.linkedin.com/in/sonidiaz/",    external: true },
  { nombre: "GitHub",   url: "github.com/sonidiaz",       href: "https://github.com/sonidiaz/",             external: true },
];

const DISPONIBILIDAD = [
  "Senior FullStack Developer",
  "EdTech, HealthTech, impacto social",
  "Remoto o híbrido en España",
  "Colaboración con La Cabrera.eco",
];

export default function ContactoSection() {
  return (
    <section className={styles.section} id="contacto">
      <div className={styles.inner}>
        <div className="reveal">
          <p className={styles.eyebrow}>Contacto</p>
          <h2 className={styles.titulo}>Hablemos, <em>te ayudo con tu idea tecnológica</em></h2>
          {/* <p className={styles.p}>
            Si trabajas en un producto con propósito y buscas a alguien que combine criterio técnico, visión estratégica y experiencia real con IA para aportar desde el primer día, escríbeme.
          </p> */}
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
        </div>

        <div className={`${styles.disponible} reveal r2`}>
          {/* <p className={styles.cdisLabel}>Disponibilidad</p> */}
          <p className={styles.cdisTitulo}> Fulltime / Partime / Freelance</p>
          <div className={styles.cdisItems}>
            {DISPONIBILIDAD.map((d) => (
              <div key={d} className={styles.cdisItem}>{d}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
