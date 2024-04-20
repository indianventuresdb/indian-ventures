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

  const name = formData.get("name");
  const phone = formData.get("phone");
  const organization = formData.get("organization");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    const info = await transporter.sendMail({
      from: process.env.NEXT_EMAIL,
      to: process.env.NEXT_EMAIL_RECEIVER,
      subject: "New Query",
      text: `Name: ${name}\nPhone: ${phone}\nOrganization: ${organization}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("Email sent: " + info.response);
    return { success: true };
  } catch (error) {
    console.error("Error occurred: ", error);
    return { success: false };
  }
}
