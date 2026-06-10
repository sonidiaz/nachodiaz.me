import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";
import RevealProvider from "@/components/RevealProvider/RevealProvider";
import styles from "./experiencia.module.css";

export const metadata: Metadata = {
  title: "Experiencia — Nacho Díaz",
  description: "12 años transformando ideas en productos digitales. Desde estrategia tecnológica hasta implementación.",
};

const AREAS = [
  {
    titulo: "Frontend Development",
    tecnologias: ["React", "JavaScript", "TypeScript", "HTML", "CSS"],
    empresas: ["RTVE.es", "Minsait / Indra", "Ernst & Young"],
    desc: "Interfaces que funcionan desde grandes marcas hasta plataformas editoriales de escala nacional. Especializado en React, TypeScript y arquitectura frontend, con integración real de IA en el flujo de desarrollo diario.",
  },
  {
    titulo: "Frontend–Backend Integration",
    tecnologias: ["Node.js", "PHP", "WordPress", "Next.js"],
    empresas: ["RTVE.es", "Citizens.legal", "BergMedical"],
    desc: "Integración de APIs externas, configuración de servidores Cloudways, arquitecturas headless con WooCommerce y Payload CMS.",
  },
  {
    titulo: "Technical Leadership & Storytelling Interactivo",
    tecnologias: ["React", "GSAP", "Mapbox", "Canvas", "Video API"],
    empresas: ["RTVE.es", "Agencias Raya & Carcavilla"],
    desc: "Dirección técnica de narrativas interactivas para clientes como Puma y Huawei. Arquitectura de componentes reutilizables para coberturas editoriales.",
  },
  {
    titulo: "IA & Automatización",
    tecnologias: ["Claude Code", "Make.com", "N8N", "OpenAI", "Jeeliz"],
    empresas: ["RTVE.es", "Citizens.legal", "Minsait / Indra"],
    desc: "Automatización de documentos legales, integración de reconocimiento facial por ML, reducción de ciclos de entrega de semanas a días con AI-assisted development.",
  },
  {
    titulo: "Team Alignment & Mentorship",
    tecnologias: ["Slack API", "Accredible", "LearnDash", "Agile"],
    empresas: ["RTVE.es", "BeForGet"],
    desc: "Onboarding técnico para equipos, integración de plataformas de certificación y acompañamiento en la adopción de las tecnologías adecuadas para cada proyecto y equipo.",
  },
  {
    titulo: "Experiencia Multicultural",
    tecnologias: ["Remote", "Agile", "Scrum"],
    empresas: ["Santiago de Chile", "Madrid", "Barcelona"],
    desc: "12 años construyendo productos en Chile y España, en contextos de agencia, startup, consultoría y empresa nacional. Adaptabilidad a metodologías ágiles y corporativas.",
  },
];

const TRAYECTORIA = [
  {
    periodo: "2023 → hoy",
    empresa: "RTVE.es",
    rol: "FullStack developer",
    desc: "Construí el sistema de componentes en React para infografías digitales de RTVE, algunas reconocidas con premios internacionales",
    tags: ["React", "TypeScript", "Claude Code", "Vite", "Node.js", "PHP"],
  },
  {
    periodo: "2020 → 2023",
    empresa: "BeForGet",
    rol: "Consultor tecnológico",
    desc: "Plataforma EdTech y comunidad de aprendizaje. Dashboard de proyectos, comunidades con Slack API, mini-app de detección facial.",
    tags: ["React", "Next.js", "Vue.js", "WordPress", "Slack API"],
  },
  {
    periodo: "2018 → 2020",
    empresa: "Minsait / Indra",
    rol: "Frontend Engineer",
    desc: "Implementé módulos de biometría con Machine Learning para detección facial y contribuí a sistemas de gestión de accesos e identidad, con Vue.js y WebGL en entornos enterprise.",
    tags: ["JavaScript", "React/Vue", "ML"],
  },
  {
    periodo: "2018 → 2019",
    empresa: "Ernst & Young",
    rol: "Frontend Developer",
    desc: "Mantuve y optimicé plataformas digitales en AngularJS, mejorando rendimiento y experiencia de usuario en proyectos de consultoría enterprise.",
    tags: ["JavaScript", "HTML", "CSS", "AngularJS"],
  },
  {
    periodo: "2012 → 2016",
    empresa: "Agencias Chile",
    rol: "Desarrollador Web",
    desc: "Raya & Carcavilla. Campañas de marketing digital, sitios web para clientes como Puma y Huawei.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
  },
];

export default function ExperienciaPage() {
  return (
    <RevealProvider>
      <main className={styles.main}>

        {/* HEADER */}
        <div className={styles.header}>
          <p className={`${styles.eyebrow} reveal`}>Trayectoria</p>
          <h1 className={`${styles.titulo} reveal r2`}>Mi experiencia en tecnología</h1>
          <p className={`${styles.sub} reveal r2`}>
            12 años transformando ideas en productos digitales. Desde estrategia tecnológica
            hasta implementación, enfocado en generar valor real para las personas y los negocios.
          </p>
        </div>

        {/* ÁREAS */}
        <section className={styles.areasSection}>
          <div className={styles.areasInner}>
            <p className={`${styles.secEyebrow} reveal`}>Áreas de expertise</p>
            <div className={styles.areasGrid}>
              {AREAS.map((a, i) => (
                <div key={a.titulo} className={`${styles.areaCard} reveal ${i % 2 === 1 ? "r2" : ""}`}>
                  <h2 className={styles.areaTitulo}>{a.titulo}</h2>
                  <p className={styles.areaDesc}>{a.desc}</p>
                  <div className={styles.areaEmpresas}>
                    {a.empresas.map((e) => (
                      <span key={e} className={styles.empresa}>{e}</span>
                    ))}
                  </div>
                  <div className={styles.tags}>
                    {a.tecnologias.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRAYECTORIA */}
        <section className={styles.traySection}>
          <div className={styles.trayInner}>
            <p className={`${styles.secEyebrow} reveal`}>Historial profesional</p>
            <div className={styles.trayList}>
              {TRAYECTORIA.map((t, i) => (
                <div key={t.empresa + t.periodo} className={`${styles.trayItem} reveal ${i % 2 === 1 ? "r2" : ""}`}>
                  <div className={styles.trayLeft}>
                    <p className={styles.trayPeriodo}>{t.periodo}</p>
                    <p className={styles.trayEmpresa}>{t.empresa}</p>
                    <p className={styles.trayRol}>{t.rol}</p>
                  </div>
                  <div className={styles.trayRight}>
                    <p className={styles.trayDesc}>{t.desc}</p>
                    <div className={styles.tags}>
                      {t.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </RevealProvider>
  );
}
