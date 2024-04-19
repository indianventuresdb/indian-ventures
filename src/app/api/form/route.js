// pages/api/form/route.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const transporter = nodemailer.createTransport({
        service: "GMAIL",
        auth: {
          user: process.env.NEXT_EMAIL,
          pass: process.env.NEXT_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.NEXT_EMAIL,
        to: process.env.NEXT_EMAIL_RECEVER,
        subject: "New Form Submission",
        text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nBrand: ${data.brand}\nService: ${data.service}\nBudget: ${data.budget}\nMessage: ${data.message}`,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).end();
  }
}
