// export const VERIFICATION_EMAIL_TEMPLATE = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Verify Your Email</title>
// </head>
// <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
//   <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
//     <h1 style="color: white; margin: 0;">Verify Your Email</h1>
//   </div>
//   <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
//     <p>Hello,</p>
//     <p>Thank you for signing up! Your verification code is:</p>
//     <div style="text-align: center; margin: 30px 0;">
//       <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{verificationCode}</span>
//     </div>
//     <p>Enter this code on the verification page to complete your registration.</p>
//     <p>This code will expire in 15 minutes for security reasons.</p>
//     <p>If you didn't create an account with us, please ignore this email.</p>
//     <p>Best regards,<br>Your App Team</p>
//   </div>
//   <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
//     <p>This is an automated message, please do not reply to this email.</p>
//   </div>
// </body>
// </html>
// `;

// export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Password Reset Successful</title>
// </head>
// <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
//   <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
//     <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
//   </div>
//   <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
//     <p>Hello,</p>
//     <p>We're writing to confirm that your password has been successfully reset.</p>
//     <div style="text-align: center; margin: 30px 0;">
//       <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
//         ✓
//       </div>
//     </div>
//     <p>If you did not initiate this password reset, please contact our support team immediately.</p>
//     <p>For security reasons, we recommend that you:</p>
//     <ul>
//       <li>Use a strong, unique password</li>
//       <li>Enable two-factor authentication if available</li>
//       <li>Avoid using the same password across multiple sites</li>
//     </ul>
//     <p>Thank you for helping us keep your account secure.</p>
//     <p>Best regards,<br>Your App Team</p>
//   </div>
//   <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
//     <p>This is an automated message, please do not reply to this email.</p>
//   </div>
// </body>
// </html>
// `;

// export const PASSWORD_RESET_REQUEST_TEMPLATE = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Reset Your Password</title>
// </head>
// <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
//   <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
//     <h1 style="color: white; margin: 0;">Password Reset</h1>
//   </div>
//   <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
//     <p>Hello,</p>
//     <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
//     <p>To reset your password, click the button below:</p>
//     <div style="text-align: center; margin: 30px 0;">
//       <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
//     </div>
//     <p>This link will expire in 1 hour for security reasons.</p>
//     <p>Best regards,<br>Your App Team</p>
//   </div>
//   <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
//     <p>This is an automated message, please do not reply to this email.</p>
//   </div>
// </body>
// </html>
// `;


// emails/emailTemplates.js

export const VERIFICATION_EMAIL_TEMPLATE = (verificationCode) => `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vérifiez votre email</title>
</head>
<body style="font-family:'Segoe UI',Arial,sans-serif;margin:0;padding:0;background-color:#f4f7f9;">
  <div style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 25px rgba(0,0,0,0.1);border:1px solid #e0e0e0;">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#4CAF50,#3ea55c);padding:25px;text-align:center;">
      <h1 style="color:white;margin:0;font-size:28px;">Auth App 🔒</h1>
    </div>

    <!-- Body -->
    <div style="padding:35px;">
      <h2 style="color:#333;margin-top:0;">Vérification de votre email</h2>
      <p style="font-size:16px;color:#555;">Merci de vous être inscrit ! Pour compléter votre inscription, utilisez le code ci-dessous :</p>

      <!-- Code -->
      <div style="text-align:center;margin:30px 0;">
        <span style="font-size:36px;font-weight:bold;background:#f3f3f3;padding:15px 30px;border-radius:10px;display:inline-block;letter-spacing:4px;color:#333;">
          ${verificationCode}
        </span>
      </div>

      <!-- Button -->
      <div style="text-align:center;margin:25px 0;">
        <a href="${process.env.CLIENT_URL}/verify-email?code=${verificationCode}" 
           style="background-color:#4CAF50;color:#fff;padding:12px 25px;border-radius:8px;text-decoration:none;font-weight:bold;display:inline-block;">
          Vérifier mon email
        </a>
      </div>

      <p style="font-size:14px;color:#888;margin-top:30px;">Ce code est valable pendant <b>10 minutes</b>. Si vous n’êtes pas à l’origine de cette demande, ignorez simplement cet email.</p>
    </div>

    <!-- Footer -->
    <div style="text-align:center;padding:20px;background-color:#f9f9f9;color:#777;font-size:13px;">
      <p>© ${new Date().getFullYear()} Auth App. Tous droits réservés.</p>
    </div>

  </div>
</body>
</html>
`;


export const PASSWORD_RESET_REQUEST_TEMPLATE = (resetURL) => `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Réinitialisez votre mot de passe</title>
</head>
<body style="font-family:'Segoe UI',Arial,sans-serif;margin:0;padding:0;background-color:#f4f7f9;">
  <div style="max-width:600px;margin:30px auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
    
    <div style="background:linear-gradient(135deg,#FF5722,#e64a19);padding:20px;text-align:center;">
      <h1 style="color:white;margin:0;">Réinitialisation du mot de passe</h1>
    </div>

    <div style="padding:30px;">
      <p>Vous avez demandé à réinitialiser votre mot de passe.</p>
      <p>Cliquez sur le bouton ci-dessous pour continuer :</p>
      <div style="text-align:center;margin:30px 0;">
        <a href="${resetURL}" style="background-color:#FF5722;color:#fff;padding:12px 25px;text-decoration:none;border-radius:6px;font-weight:bold;">
          Réinitialiser mon mot de passe
        </a>
      </div>
      <p>Ce lien expirera dans 1 heure.</p>
      <p>Si vous n’avez pas fait cette demande, ignorez simplement cet email.</p>
    </div>

    <div style="text-align:center;padding:20px;background-color:#f9f9f9;color:#777;font-size:13px;">
      <p>© ${new Date().getFullYear()} Auth App. Tous droits réservés.</p>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mot de passe réinitialisé</title>
</head>
<body style="font-family:'Segoe UI',Arial,sans-serif;margin:0;padding:0;background-color:#f4f7f9;">
  <div style="max-width:600px;margin:30px auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
    
    <div style="background:linear-gradient(135deg,#4CAF50,#3ea55c);padding:20px;text-align:center;">
      <h1 style="color:white;margin:0;">Mot de passe réinitialisé</h1>
    </div>

    <div style="padding:30px;">
      <h2 style="color:#333;">Succès ✅</h2>
      <p>Votre mot de passe a été modifié avec succès. Vous pouvez maintenant vous connecter.</p>
      <div style="text-align:center;margin:30px 0;">
        <a href="${process.env.CLIENT_URL}/login" style="background-color:#4CAF50;color:#fff;padding:12px 25px;text-decoration:none;border-radius:6px;font-weight:bold;">
          Se connecter
        </a>
      </div>
      <p>Si vous n’êtes pas à l’origine de ce changement, contactez notre support immédiatement.</p>
    </div>

    <div style="text-align:center;padding:20px;background-color:#f9f9f9;color:#777;font-size:13px;">
      <p>© ${new Date().getFullYear()} Auth App. Tous droits réservés.</p>
    </div>
  </div>
</body>
</html>
`;
