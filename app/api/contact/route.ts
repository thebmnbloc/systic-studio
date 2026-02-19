import { EmailTemplate } from '@/components/email-template';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, details } = await request.json();

    // Validation
    if (!firstName || !lastName || !email || !details) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`;

    // Send email to Systic Studio
    const { data, error } = await resend.emails.send({
      from: `Systic Studio Contact <${process.env.FROM_EMAIL}>`,
      to: [process.env.CONTACT_EMAIL!],
      subject: `New Project Inquiry from ${fullName}`,
      replyTo: email,
      react: EmailTemplate({ firstName: 'John' }) as any,
      /*
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #059669; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
            .value { font-size: 16px; color: #111827; margin-top: 4px; }
            .details { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #059669; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">New Project Inquiry</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Systic Studio Contact Form</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${fullName}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Project Details</div>
                <div class="details">
                  ${details.replace(/\n/g, '<br>')}
                </div>
              </div>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
              <p style="font-size: 12px; color: #6b7280; text-align: center;">
                Received on ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Project Inquiry from ${fullName}

Email: ${email}

Project Details:
${details}

Received: ${new Date().toLocaleString()}
      `,
*/

    });
    

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Optional: Send confirmation email to user
    await resend.emails.send({
      from: `Systic Studio <${process.env.FROM_EMAIL}>`,
      to: [email],
      subject: 'We received your message!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669;">Thanks for reaching out, ${firstName}!</h2>
          <p>We've received your project inquiry and will get back to you within 24 hours.</p>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">Your message:</p>
            <p style="margin: 10px 0 0 0;">${details.substring(0, 100)}${details.length > 100 ? '...' : ''}</p>
          </div>
          <p>Best regards,<br>The Systic Studio Team</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}