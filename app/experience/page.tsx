import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'mherron54@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: #2a2927;
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border: 1px solid #e0e0e0;
                border-top: none;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: 600;
                color: #666;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .value {
                font-size: 16px;
                color: #333;
              }
              .message-box {
                background: white;
                padding: 15px;
                border-left: 3px solid #FFA600;
                border-radius: 4px;
                margin-top: 10px;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
                font-size: 12px;
                color: #999;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h2 style="margin: 0;">New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value">
                  <a href="mailto:${email}" style="color: #FFA600; text-decoration: none;">${email}</a>
                </div>
              </div>
              
              ${message ? `
                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </div>
              ` : ''}
              
              <div class="footer">
                Sent from mherron.com contact form
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
