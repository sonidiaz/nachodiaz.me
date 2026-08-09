import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero} id="inicio">
      <div className={styles.heroMain}>
        {/* <div className={`${styles.status} reveal`}>
          <span className={styles.statusDot} />
          Disponible para nuevas oportunidades
        </div> */}

        <h1 className={`${styles.headline} reveal r2`}>
      Hola, soy Nacho <br/> </h1>

          <h2 className={`${styles.subHeadline} reveal r2`}> Y desarrollo soluciones digitales de hace más de 12 años</h2>

        <p className={`${styles.sub} reveal r3`}>
          Con el tiempo he aprendido a crear alternativas honestas, con criterio simple para entregar siempre solo lo que el problema necesita.
        {/* +10 años desarrollando plataformas digitales con un criterio simple: <b>entregarla tecnología que el problema pide.</b> */}
        </p>

        <div className={`${styles.actions} reveal r3`}>
          <a href="#trabajo" className={styles.btnPrimary}>Últimos trabajos</a>
          {/* <Link href="/proyectos" className={styles.btnSecondary}>Ver proyectos</Link>
          <Link href="/contacto" className={styles.btnSecondary}>Contactar</Link> */}
        </div>
      </div>

      {/* <div className={`${styles.metrics} reveal`}>
        <div className={styles.metric}>
          <p className={styles.metricNum}>+10</p>
          <p className={styles.metricLabel}>años en producto digital</p>
        </div>
        <div className={styles.metric}>
          <p className={styles.metricNum}>×100</p>
          <p className={styles.metricLabel}>más rápido con IA entregando valor</p>
        </div>
        <div className={styles.metric}>
          <p className={styles.metricNum}>RTVE</p>
          <p className={styles.metricLabel}>Plataforma editorial de escala nacional</p>
        </div>
        <div className={styles.metric}>
          <p className={styles.metricNum}>Frontend a Fullstack</p>
          <p className={styles.metricLabel}>Del componente al sistema completo.</p>
        </div>
      </div> */}
    </div>
  );
}
