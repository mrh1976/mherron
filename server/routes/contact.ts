import { Request, Response } from "express";
import nodemailer from "nodemailer";

export async function handleContact(req: Request, res: Response) {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  // Check if Gmail credentials are set
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
    console.error("Gmail credentials not configured");
    return res
      .status(500)
      .json({ error: "Server configuration error: Gmail credentials not set" });
  }

  try {
    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Test the connection
    try {
      await transporter.verify();
      console.log("Gmail SMTP connection verified");
    } catch (verifyError) {
      console.error("Gmail verification failed:", verifyError);
      throw new Error(`Gmail verification failed: ${verifyError}`);
    }

    // Send email to the recipient
    const mailResult = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "mherron54@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      `,
    });

    console.log("Email sent successfully:", mailResult.messageId);
    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Email error:", errorMessage);
    res.status(500).json({ error: `Failed to send email: ${errorMessage}` });
  }
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
