"use server";
import nodemailer from "nodemailer";

export default async function submitPopupForm(formData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "augseclothing@gmail.com",
      pass: "zuxzbajhutolgtbb",
    },
  });

  console.log("user", process.env.NEXT_PUBLIC_EMAIL);
  console.log("pass", process.env.NEXT_PUBLIC_PASSWORD);

  const { name, email, phone, organization, requirement } = formData;

  try {
    const info = await transporter.sendMail({
      from: "augseclothing@gmail.com",
      to: "tiwaripriya215@gmail.com",
      subject: "New Benefit Signup",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nOrganization: ${organization}\nRequirement: ${requirement}`,
    });

    console.log("Email sent: " + info.response);
    return { success: true, message: "Signup Submitted Successfully" };
  } catch (error) {
    console.error("Error occurred: ", error);
    return { success: false, message: "There was an Error" };
  }
}
