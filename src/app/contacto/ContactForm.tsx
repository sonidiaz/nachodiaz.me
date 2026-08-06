"use client";
import { useState } from "react";
import styles from "./contacto.module.css";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMsg("");

    const form = e.currentTarget;
    const body = new FormData(form);

    try {
      const res = await fetch("/api/contact", { method: "POST", body });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setStatus("ok");
      setMsg(data.message);
      form.reset();
    } catch (err) {
      setStatus("error");
      setMsg(err instanceof Error ? err.message : "Error al enviar el mensaje.");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Tu nombre"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="tu@email.com"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>Mensaje</label>
        <textarea
          id="message"
          name="message"
          placeholder="Cuéntame en qué puedo ayudarte..."
          required
          rows={5}
          className={`${styles.input} ${styles.textarea}`}
        />
      </div>

      <div className={styles.checkRow}>
        <input
          id="privacy"
          name="privacy_consent"
          type="checkbox"
          required
          className={styles.checkbox}
        />
        <label htmlFor="privacy" className={styles.checkLabel}>
          Acepto que mis datos no serán almacenados ni utilizados para ningún otro fin que no sea
          contactarme en relación a mi consulta.
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={styles.submit}
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>

      {msg && (
        <p className={status === "ok" ? styles.msgOk : styles.msgError}>
          {msg}
        </p>
      )}
    </form>
  );
}
