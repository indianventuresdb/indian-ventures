"use server";
import nodemailer from "nodemailer";

export default async function submitContact(formData) {
  const transporter = nodemailer.createTransport({
    service: "GMAIL",
    auth: {
      user: process.env.NEXT_EMAIL,
      pass: process.env.NEXT_PASSWORD,
    },
  });

  const { name, phone, organization, email, message } = formData;

  try {
    const info = await transporter.sendMail({
      from: process.env.NEXT_EMAIL,
      to: process.env.NEXT_EMAIL_RECEVER,
      subject: "New Query",
      text: `Name: ${name}\nPhone: ${phone}\nOrganization: ${organization}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("Email sent: " + info.response);
    return JSON.stringify({ success: true });
  } catch (error) {
    console.error("Error occurred: ", error);
    return JSON.stringify({ false: error });
  }
}
