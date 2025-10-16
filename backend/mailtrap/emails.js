import { sendEmail } from "./nodemailer.config.js";

export const sendVerificationEmail = async (email, token) => {
  const html = `<p>Ton code de vérification est : <b>${token}</b></p>`;
  await sendEmail(email, "Vérifie ton email", html);
};

export const sendWelcomeEmail = async (email, name) => {
  const html = `<p>Bienvenue ${name} ! Ton email a été vérifié avec succès.</p>`;
  await sendEmail(email, "Bienvenue !", html);
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const html = `<p>Pour réinitialiser ton mot de passe, clique ici : <a href="${resetURL}">${resetURL}</a></p>`;
  await sendEmail(email, "Réinitialisation de ton mot de passe", html);
};

export const sendResetSuccessEmail = async (email) => {
  const html = `<p>Ton mot de passe a été réinitialisé avec succès.</p>`;
  await sendEmail(email, "Mot de passe réinitialisé", html);
};
