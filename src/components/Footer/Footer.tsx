import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>Nacho Díaz · Frontend Engineer · 2026</span>
      <span className={styles.email}>nachodiaz8@gmail.com</span>
    </footer>
  );
}
