import { MailtrapClient } from "mailtrap";
import dotenv from 'dotenv';

dotenv.config({ path: "../.env" });


export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,

});



export const sender = {
  email: "hello@demomailtrap.co",
  name: "Flifla🌶️",
};



// const recipients = [
//   {
//     email: "salma.elakhale@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     html: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);