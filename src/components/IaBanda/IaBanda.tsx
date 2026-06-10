import styles from "./IaBanda.module.css";

export default function IaBanda() {
  return (
    <div className={styles.banda}>
      <div className={styles.inner}>
        <div className={`reveal`}>
          <p className={styles.eyebrow}>Cómo trabajo hoy</p>
          <h2 className={styles.h2}>
            La IA no me <em>quitó el trabajo.</em>
            <br />Me devolvió el tiempo.
          </h2>
          <p className={styles.p}>
            Antes, una pieza interactiva compleja me llevaba un mes. Arquitectura, componentes,
            datos, iteraciones con el equipo editorial. Tiempo que no podía dedicar a pensar
            bien el problema.
          </p>
          <p className={styles.p}>
            Hoy entrego la misma pieza en un día. Con Claude Code y OpenCode como copiloto,
            el tiempo que antes gastaba en implementación mecánica lo dedico a lo que importa:
            entender el problema, diseñar bien la solución y asegurar que lo que entrego tiene
            sentido para el usuario.
          </p>
          <p className={styles.pStrong}>Eso es lo que puedo traer a un equipo.</p>
        </div>

        <div className={`reveal r2`}>
          <p className={styles.datoGrande}>30×</p>
          <p className={styles.datoLabel}>más rápido en entregas complejas</p>

          <div className={styles.stack}>
            <div className={styles.tool}>
              <p className={styles.toolIco}>01</p>
              <div>
                <p className={styles.toolTitulo}>Claude Code</p>
                <p className={styles.toolDesc}>
                  Arquitectura, debugging y exploración de soluciones técnicas complejas en tiempo real.
                </p>
              </div>
            </div>
            <div className={styles.tool}>
              <p className={styles.toolIco}>02</p>
              <div>
                <p className={styles.toolTitulo}>OpenCode</p>
                <p className={styles.toolDesc}>
                  Flujo de desarrollo asistido por IA integrado directamente en el entorno de trabajo.
                </p>
              </div>
            </div>
            <div className={styles.tool}>
              <p className={styles.toolIco}>03</p>
              <div>
                <p className={styles.toolTitulo}>Make.com · N8N</p>
                <p className={styles.toolDesc}>
                  Automatización de procesos repetitivos para que el equipo se centre en lo que crea valor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
