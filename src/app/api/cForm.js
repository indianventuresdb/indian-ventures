// pages/api/contactForm.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, phone, organization, email, message } = req.body;

      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        // Configure your SMTP settings here
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.NEXT_EMAIL,
          pass: process.env.NEXT_PASSWORD,
        },
      });

      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: `"Your Name" <${process.env.NEXT_EMAIL}>`,
        to: process.env.NEXT_EMAIL_RECEIVER,
        subject: "New Contact Form Submission",
        html: `
          <p>Name: ${name}</p>
          <p>Phone: ${phone}</p>
          <p>Organization: ${organization}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
        `,
      });

      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ success: false, error: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
