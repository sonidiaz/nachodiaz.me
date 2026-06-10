import styles from "./PropositoSection.module.css";

const CARDS = [
  {
    ico: "Ed",
    titulo: "EdTech",
    texto: "Plataformas de aprendizaje que llegan a millones de estudiantes. La calidad técnica aquí tiene impacto directo en la experiencia educativa.",
    delay: "",
  },
  {
    ico: "+",
    titulo: "HealthTech",
    texto: "Productos de salud digital donde el rendimiento y la accesibilidad no son opcionales — son parte de la misión.",
    delay: "r2",
  },
  {
    ico: "∿",
    titulo: "Impacto social",
    texto: "Proyectos cívicos, sociales o territoriales donde la tecnología acompaña el cambio en lugar de imponerse.",
    delay: "r3",
  },
];

export default function PropositoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={`${styles.eyebrow} reveal`}>Por qué el propósito importa</p>
        <h2 className={`${styles.titulo} reveal r2`}>
          Me interesan los productos donde importa lo que construyes.
        </h2>
        <p className={`${styles.intro} reveal r2`}>
          No me da igual el tipo de empresa donde trabajo. Me mueven los proyectos donde la
          tecnología y la misión se refuerzan — donde construir bien tiene consecuencias reales.
        </p>
        <div className={styles.grid}>
          {CARDS.map((c) => (
            <div key={c.titulo} className={`${styles.card} reveal ${c.delay}`}>
              <p className={styles.ico}>{c.ico}</p>
              <p className={styles.cardTitulo}>{c.titulo}</p>
              <p className={styles.cardTexto}>{c.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
