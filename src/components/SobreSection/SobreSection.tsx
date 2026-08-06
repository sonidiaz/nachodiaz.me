import styles from "./SobreSection.module.css";

const TRAYECTORIA = [
  { year: "2023→",    empresa: "RTVE.es",        rol: "FullStack developer · Plataforma de medio de comunicación" },
  { year: "2020→23",  empresa: "BeForGet",        rol: "Consultor tecnológico · Plataforma EdTech y comunidad" },
  { year: "2018→20",  empresa: "Minsait / Indra", rol: "Frontend · Machine Learning y biometría" },
  { year: "2018→19",  empresa: "Ernst & Young",   rol: "Frontend Developer · Consultoría tecnológica" },
  { year: "2012→16",  empresa: "Agencias Chile",  rol: "Desarrollador Web · Raya & Carcavilla" },
];

export default function SobreSection() {
  return (
    <>
      <div style={{ borderTop: "1px solid var(--line)" }} />
      <section className={styles.section} id="sobre">
        <div className={styles.inner}>
          <div className="reveal">
            <p className={styles.eyebrow}>Sobre mí</p>
            <h2 className={styles.titulo}>Nacho Díaz Anabalón</h2>
            <p className={styles.p}>
              Soy desarrollador web con más de diez años construyendo productos digitales —
              desde campañas de marketing en agencias de Santiago de Chile hasta arquitecturas
              React en una de las plataformas editoriales más grandes de España.
            </p>
            <p className={styles.p}>
              Lo que ha cambiado en los últimos años es <strong>cómo trabajo</strong>. Integrar
              IA en mi flujo diario no ha sido una moda, ha sido el cambio más significativo en
              mi productividad desde que empecé a programar. Lo que antes me llevaba dias, hoy
              lo entrego en horas.
            </p>
            <p className={styles.p}>
              Me interesan los equipos donde la tecnología está al servicio de algo más grande que
              el producto en sí. <strong>EdTech, HealthTech, impacto social.</strong> Lugares donde
              construir bien tiene consecuencias reales.
            </p>
          </div>

          <div className="reveal r2">
            <p className={styles.trayLabel}>Trayectoria</p>
            <div className={styles.trayectoria}>
              {TRAYECTORIA.map((t) => (
                <div key={t.empresa + t.year} className={styles.trayItem}>
                  <p className={styles.trayYear}>{t.year}</p>
                  <div>
                    <p className={styles.trayEmpresa}>{t.empresa}</p>
                    <p className={styles.trayRol}>{t.rol}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
