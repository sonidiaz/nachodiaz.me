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
          Soluciones honestas que conectan tecnología con personas
        </h1>

        <p className={`${styles.sub} reveal r3`}>
          +10 años diseñando y evolucionando plataformas digitales. Especializado en
          modernización de sistemas legacy, arquitectura React y adopción de IA en workflows
          de desarrollo. Me interesan los productos donde la tecnología y la misión se refuerzan.
        </p>

        <div className={`${styles.actions} reveal r3`}>
          <a href="#trabajo" className={styles.btnPrimary}>Ver mi trabajo</a>
          <Link href="/proyectos" className={styles.btnSecondary}>Ver proyectos</Link>
          <a href="#contacto" className={styles.btnSecondary}>Contactar</a>
        </div>
      </div>

      <div className={`${styles.metrics} reveal`}>
        <div className={styles.metric}>
          <p className={styles.metricNum}>+10</p>
          <p className={styles.metricLabel}>años en producto digital</p>
        </div>
        <div className={styles.metric}>
          <p className={styles.metricNum}>×100</p>
          <p className={styles.metricLabel}>más rápido con IA entregando valor</p>
        </div>
        {/* <div className={styles.metric}>
          <p className={styles.metricNum}>RTVE</p>
          <p className={styles.metricLabel}>Plataforma editorial de escala nacional</p>
        </div> */}
        <div className={styles.metric}>
          <p className={styles.metricNum}>Frontend a Fullstack</p>
          <p className={styles.metricLabel}>Del componente al sistema completo.</p>
        </div>
      </div>
    </div>
  );
}
