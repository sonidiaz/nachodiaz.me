"use client";

import { useRef, useState } from "react";
import styles from "./ServiciosSection.module.css";

/* El acordeón solo existe por debajo de este ancho (ver el media query del CSS) */
const MOBILE_QUERY = "(max-width: 720px)";
const NAV_FALLBACK_HEIGHT = 60;

const CARDS = [
  {
    num: "1",
    tag: "Mayor valor · Recurrente",
    tagType: "green",
    titulo: "Senior / Arquitecto de Software",
    sub: "Liderazgo técnico transversal",
    items: [
      "Modernización incremental de plataformas legacy",
      "Estándares de arquitectura",
      "Visión de plataforma a largo plazo",
      // "Trato desde la empatía",
      "Puente entre equipos de producto e ingeniería",
    ],
  },
  {
    num: "2",
    tag: "Recurrente · Estándares",
    tagType: "gray",
    titulo: "Tech Lead: empatía y calidad",
    sub: "Cultura de ingeniería que escala con el equipo",
    items: [
      "Sistemas de diseño y catálogos de componentes",
      "Performance, Lighthouse y métricas de salud técnica",
      "Developer Experience y tooling moderno",
      "Acompañamiento y escucha del primer dia",
    ],
  },
  {
    num: "3",
    tag: "Diferencial · IA aplicada",
    tagType: "amber",
    titulo: "Desarrollo de software con IA integrada",
    sub: "Adopción real de IA en producto y en desarrollo",
    items: [
      "Integración de LLMs en producto",
      "Automatización de workflows de desarrollo con LLMs",
      "Reducción de tiempo de entrega de semanas a días",
      "Formación del equipo en AI-assisted development",
    ],
  },
  {
    num: "4",
    tag: "Puntual · Ejecución",
    tagType: "gray",
    titulo: "Ingeniero de producto",
    sub: "Entrega rápida con criterio técnico sólido",
    items: [
      "MVPs y prototipos funcionales en semanas",
      "Dominio end-to-end, del frontend al backend",
      "Integración con plataformas EdTech (LMS, certificaciones)",
      "Refuerzo puntual en equipos con picos de carga",
    ],
  },
];

export default function ServiciosSection() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleSelect = (next: number) => {
    const prev = active;
    setActive(next);

    if (!window.matchMedia(MOBILE_QUERY).matches) return;

    const tab = tabRefs.current[next];
    if (!tab) return;

    /* Medimos antes de que React repinte: si el panel que se cierra queda por
       encima del tab pulsado, el tab subirá esa altura al colapsar. */
    const tabTop = tab.getBoundingClientRect().top;
    const closing = prev !== next ? panelRefs.current[prev] : null;
    const shift =
      closing && closing.getBoundingClientRect().top < tabTop
        ? closing.offsetHeight
        : 0;

    const navHeight =
      document.querySelector("nav")?.getBoundingClientRect().height ??
      NAV_FALLBACK_HEIGHT;
    const top = Math.max(0, tabTop + window.scrollY - navHeight - shift);

    window.scrollTo({
      top,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <section className={styles.section} id="enfoque">
      <div className={styles.inner}>
        <p className={`${styles.eyebrow} reveal`}>Dónde aporto valor</p>
        <h2 className={`${styles.title} reveal r2`}>
          Cuatro areas de desarrollo.
        </h2>
        {/* <p className={`${styles.intro} reveal r2`}>
          Hay empresas donde la tecnología no es solo el producto, es la forma de cambiar algo
          que importa. Eso es lo que me mueve. Trabajo en cuatro niveles según lo que necesite
          el proyecto.
        </p> */}

        <div className={`${styles.accordion} reveal r2`}>
          {CARDS.map((c, i) => {
            const isOpen = i === active;
            return (
              <div key={c.num} className={styles.itemGroup}>
                <button
                  id={`servicio-tab-${i}`}
                  ref={(el) => { tabRefs.current[i] = el; }}
                  className={`${styles.tab} ${isOpen ? styles.tabActive : ""}`}
                  onClick={() => handleSelect(i)}
                  aria-expanded={isOpen}
                  aria-controls={`servicio-panel-${i}`}
                >
                  <span className={styles.tabNum}>{c.num}</span>
                  <span className={styles.tabLabel}>{c.titulo}</span>
                  <span className={styles.chevron} aria-hidden="true" />
                </button>

                <div
                  id={`servicio-panel-${i}`}
                  ref={(el) => { panelRefs.current[i] = el; }}
                  role="region"
                  aria-labelledby={`servicio-tab-${i}`}
                  className={`${styles.panelWrap} ${isOpen ? styles.panelWrapOpen : ""}`}
                >
                  <div className={styles.panelInner}>
                    <div className={styles.panel}>
                      <h3 className={styles.panelTitle}>{c.titulo}</h3>
                      <div className={styles.items}>
                        {c.items.map((item) => (
                          <div key={item} className={styles.item}>{item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
