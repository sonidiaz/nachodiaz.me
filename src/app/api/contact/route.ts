import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name    = String(formData.get("name")    ?? "").trim();
  const email   = String(formData.get("email")   ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const consent = formData.get("privacy_consent");

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Rellena todos los campos." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ message: "Debes aceptar la política de privacidad." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ message: "Servicio de email no configurado." }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "nachodiaz8@gmail.com",
      to:   "nachodiaz8@gmail.com",
      reply_to: email,
      subject: `Nuevo contacto de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ message: "No se pudo enviar el mensaje. Inténtalo de nuevo." }, { status: 502 });
  }

  return NextResponse.json({ message: "¡Mensaje enviado! Te respondo en breve." });
}
