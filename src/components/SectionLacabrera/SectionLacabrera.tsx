import Image from "next/image";
import styles from "./SectionLacabrera.module.css";

export default function SectionLacabrera() {
  return (
    <section className={styles.banner}>
      <Image
        src="/lacabrera.jpg"
        alt="Paisaje La Cabrera"
        fill
        className={styles.bg}
        sizes="100vw"
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>Estudio digital &amp; lab territorial</p>

        <Image
          src="/logo-lacabrera.png"
          alt="La Cabrera"
          width={900}
          height={240}
          className={styles.logo}
          priority
        />

        <a href="https://lacabrera.eco" className={styles.cta} target="_blank" rel="noopener noreferrer">
          Conócenos
        </a>
      </div>
    </section>
  );
}
