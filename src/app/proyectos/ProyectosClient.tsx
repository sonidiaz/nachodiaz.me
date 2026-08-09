"use client";
import { useState, useRef } from "react";
import { PROYECTOS, type Categoria } from "@/data/proyectos";
import styles from "./proyectos.module.css";

const CATEGORIAS: { id: Categoria; label: string }[] = [
  { id: "todos",       label: "Todos" },
  { id: "infografias", label: "Infografías" },
  { id: "web",         label: "Desarrollo web" },
  { id: "marketing",   label: "Marketing y prototipos" },
];

const COUNTS: Record<Categoria, number> = {
  todos:       PROYECTOS.length,
  infografias: PROYECTOS.filter((p) => p.categoria === "infografias").length,
  web:         PROYECTOS.filter((p) => p.categoria === "web").length,
  marketing:   PROYECTOS.filter((p) => p.categoria === "marketing").length,
};

const CAT_LABEL: Record<Categoria, string> = {
  todos:       "Todos",
  infografias: "Infografía",
  web:         "Web",
  marketing:   "Marketing",
};

export default function ProyectosClient() {
  const [activo, setActivo] = useState<Categoria>("todos");
  const sentinelRef = useRef<HTMLDivElement>(null);

  const filtrados = activo === "todos"
    ? PROYECTOS
    : PROYECTOS.filter((p) => p.categoria === activo);

  function handleFilter(id: Categoria) {
    setActivo(id);
    if (!sentinelRef.current) return;
    const top = sentinelRef.current.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <main className={styles.main}>

      {/* HEADER */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>Proyectos</p>
        <h1 className={styles.titulo}>Tecnología aplicada</h1>
        <p className={styles.sub}>
          Del desarrollo web a las narrativas digitales
        </p>
      </div>

      {/* Sentinel: marca el top de la zona de filtros para el scroll animado */}
      <div ref={sentinelRef} />

      {/* FILTROS */}
      <div className={styles.filtrosWrap}>
        <div className={styles.filtros}>
          {CATEGORIAS.map((c) => (
            <button
              key={c.id}
              className={`${styles.filtro} ${activo === c.id ? styles.filtroActivo : ""}`}
              onClick={() => handleFilter(c.id)}
            >
              {c.label}
              <span className={styles.filtroCount}>{COUNTS[c.id]}</span>
            </button>
          ))}
        </div>
        <p className={styles.resultados}>
          {filtrados.length} proyecto{filtrados.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* GRID — key fuerza remount y relanza la animación al cambiar filtro */}
      <div className={styles.grid} key={activo}>
        {filtrados.map((p, i) => (
          <div
            key={p.titulo + p.cliente}
            className={styles.cardWrap}
            style={{ animationDelay: `${i * 35}ms` } as React.CSSProperties}
          >
            <a
              href={p.href ?? undefined}
              target={p.href ? "_blank" : undefined}
              rel={p.href ? "noopener noreferrer" : undefined}
              className={`${styles.card} ${!p.href ? styles.cardNoLink : ""}`}
            >
              <div className={styles.cardTop}>
                <span className={`${styles.catPill} ${styles[`cat_${p.categoria}`]}`}>
                  {CAT_LABEL[p.categoria]}
                </span>
                {p.href && (
                  <span className={styles.cardLinkIcon} aria-hidden>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </span>
                )}
              </div>

              <p className={styles.cardCliente}>{p.cliente}</p>
              <h2 className={styles.cardTitulo}>{p.titulo}</h2>
              <p className={styles.cardDesc}>{p.descripcion}</p>

              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>

    </main>
  );
}
