const nodemailer = require("nodemailer");

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(payload));
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed" });
    return;
  }

  let body = request.body || {};

  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch (error) {
      sendJson(response, 400, { error: "JSON invalide" });
      return;
    }
  }

  const { nom, email, message } = body;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nom || nom.trim().length < 2) {
    sendJson(response, 400, { error: "Nom invalide" });
    return;
  }

  if (!email || !emailPattern.test(email.trim())) {
    sendJson(response, 400, { error: "Email invalide" });
    return;
  }

  if (!message || message.trim().length < 10) {
    sendJson(response, 400, { error: "Message invalide" });
    return;
  }

  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactTo = process.env.CONTACT_TO || smtpUser;

  if (!smtpUser || !smtpPass || !contactTo) {
    sendJson(response, 500, { error: "Configuration SMTP manquante" });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Dounya" <${smtpUser}>`,
      to: contactTo,
      replyTo: email.trim(),
      subject: `Nouveau message de ${nom.trim()}`,
      text: [
        `Nom: ${nom.trim()}`,
        `Email: ${email.trim()}`,
        "",
        "Message:",
        message.trim()
      ].join("\n")
    });
  } catch (error) {
    sendJson(response, 500, { error: "Envoi email impossible" });
    return;
  }

  sendJson(response, 200, { ok: true });
};
