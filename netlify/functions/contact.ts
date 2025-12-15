import { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { name, email } = JSON.parse(event.body || "{}");

    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Name and email are required" }),
      };
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_PASSWORD;

    if (!gmailUser || !gmailPassword) {
      console.error("Gmail credentials not configured");
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Server configuration error: Gmail credentials not set",
        }),
      };
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: gmailUser,
      to: "mherron54@gmail.com",
      subject: `New Contact Form Submission from ${escapeHtml(name)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully",
      }),
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Contact form error:", errorMessage);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Failed to send email: ${errorMessage}` }),
    };
  }
};

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

export { handler };
