// pages/api/contact/route.js
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
        subject: "New Query",
        text: `Name: ${data.name}\nPhone: ${data.phone}\Organization: ${data.organization}\nEmail: ${data.email}\Message: ${data.message}`,
      };

      await transporter.sendMail(mailOptions);
      console.log("sending email:", text); // Log the error

      res.status(200).json({ message: "Data Submitted" });
    } catch (error) {
      console.error("Error sending email:", error); // Log the error
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
