"use server";
import nodemailer from "nodemailer";

export default async function submitForm(data) {
  const transporter = nodemailer.createTransport({
    service: "GMAIL",
    auth: {
      user: process.env.NEXT_EMAIL,
      pass: process.env.NEXT_PASSWORD,
    },
  });

  const { name, email, phone, brand, service, budget, message } = data;

  try {
    const info = await transporter.sendMail({
      from: process.env.NEXT_EMAIL,
      to: process.env.NEXT_EMAIL_RECEVER,
      subject: "New Query",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nBrand:${brand}\nService:${service}\nBudget:${budget}\nMessage: ${message}`,
    });

    console.log("Email sent: " + info.response);
    return { success: true, message: "Email Sent Successfully" };
  } catch (error) {
    console.error("Error occurred: ", error);
    return { success: false, message: "There was an Error" };
  }
}
