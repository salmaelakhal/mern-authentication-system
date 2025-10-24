// nodemailer.config.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST, // smtp-relay.brevo.com
  port: process.env.MAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER, // 99fd3a001@smtp-brevo.com
    pass: process.env.MAIL_PASS, // Le NOUVEAU mot de passe SMTP
  },
});

// Test de connexion
transporter.verify(function (error, success) {
  if (error) {
    console.error("❌ Erreur configuration Brevo:", error);
  } else {
    console.log("✅ SMTP Brevo configuré avec succès!");
    console.log("📧 Login:", process.env.MAIL_USER);
  }
});

export const sendEmail = async (to, subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Auth App" <${process.env.MAIL_USER}>`,
      to,
      subject,
      html,
    });
    console.log("✅ Email envoyé:", info.messageId);
    console.log("📧 À:", to);
    return info;
  } catch (error) {
    console.error("❌ Erreur détaillée:");
    console.error("Message:", error.message);
    if (error.response) {
      console.error("Response:", error.response);
    }
    throw error;
  }
};