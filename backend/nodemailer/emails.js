import { sendEmail } from "./nodemailer.config.js";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplates.js";

// 📩 Email de vérification
export const sendVerificationEmail = async (email, token) => {
  const html = VERIFICATION_EMAIL_TEMPLATE(token);
  await sendEmail(email, "Vérifiez votre email 🔒", html);
};

// 🎉 Email de bienvenue
export const sendWelcomeEmail = async (email, name) => {
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2>Bienvenue, ${name} 🎉</h2>
      <p>Votre compte a été vérifié avec succès.</p>
      <a href="${process.env.CLIENT_URL}/login" style="padding:10px 20px;background-color:#4CAF50;color:white;text-decoration:none;border-radius:5px;">Se connecter</a>
    </div>
  `;
  await sendEmail(email, "Bienvenue chez Auth App 🎉", html);
};

// 🔑 Email de demande de réinitialisation
export const sendPasswordResetEmail = async (email, resetURL) => {
  const html = PASSWORD_RESET_REQUEST_TEMPLATE(resetURL);
  await sendEmail(email, "Réinitialisation du mot de passe 🔑", html);
};

// ✅ Email de succès après réinitialisation
export const sendResetSuccessEmail = async (email) => {
  const html = PASSWORD_RESET_SUCCESS_TEMPLATE;
  await sendEmail(email, "Mot de passe réinitialisé avec succès ✅", html);
};
