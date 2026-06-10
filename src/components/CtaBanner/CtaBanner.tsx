import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
  return (
    <div className={styles.banda}>
      <div className={styles.inner}>
        <div className="reveal">
          <p className={styles.eyebrow}>Cómo trabajo hoy</p>
          <h2 className={styles.h2}>
            La IA me permite entregar más rápido lo que tiene sentido construir.
          </h2>
          <p className={styles.p}>
            Antes, una pieza interactiva compleja me llevaba un mes. Arquitectura, componentes,
            datos, iteraciones con los diferentes equipos. Tiempo que no podía dedicar a pensar
            bien el problema.
          </p>
          <p className={styles.p}>
            Hoy entrego la misma pieza en un día. Con los agentes de IA como copiloto,
            el tiempo que antes gastaba en implementación mecánica lo dedico a lo que importa:
            entender el problema, diseñar bien la solución y entregar valor lo más rápido posible.
          </p>
          <p className={styles.pStrong}>Eso es lo que puedo traer a un equipo.</p>
        </div>

        <div className="reveal r2">
          <p className={styles.datoGrande}>× 100</p>
          <p className={styles.datoLabel}>más rápido en entrega de valor</p>

          <div className={styles.stack}>
            {[
              { num: "01", titulo: "Diagnostico tecnologico", desc: "Antes de proponer nada, entendemos los procesos y que friccion puede resolver la tecnologia." },
              { num: "02", titulo: "IA aplicada al proyecto", desc: "Asistentes, analisis de contenido, gestion de conocimiento, adaptado al ritmo de cada proyecto." },
              { num: "03", titulo: "Transferencia y autonomia", desc: "El equipo aprende a gestionar sus herramientas. El conocimiento queda en el territorio." },
              // { num: "01", titulo: "Claude Code", desc: "Arquitectura, debugging y exploración de soluciones técnicas complejas en tiempo real." },
              // { num: "02", titulo: "OpenCode", desc: "Flujo de desarrollo asistido por IA integrado directamente en el entorno de trabajo." },
              // { num: "03", titulo: "Make.com · N8N", desc: "Automatización de procesos repetitivos para que el equipo se centre en lo que crea valor." },
            ].map((t) => (
              <div key={t.num} className={styles.tool}>
                <p className={styles.toolNum}>{t.num}</p>
                <div>
                  <p className={styles.toolTitulo}>{t.titulo}</p>
                  <p className={styles.toolDesc}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
