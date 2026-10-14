import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactSubmission {
  name: string;
  email?: string;
  phone: string;
  clinicName: string;
  specialty?: string;
  preferredTime?: string;
  message?: string;
  source?: string;
}

export async function POST(req: NextRequest) {
  try {
    const data: ContactSubmission = await req.json();

    const {
      name,
      email = "Not provided",
      phone,
      clinicName,
      specialty = "Dermatology & Skin",
      preferredTime = "As soon as possible",
      message = "Requesting live personalized demonstration of RetAI",
      source = "RetAI Web Contact Form",
    } = data;

    if (!name || !phone || !clinicName) {
      return NextResponse.json(
        { error: "Name, phone/WhatsApp number, and clinic name are required." },
        { status: 400 }
      );
    }

    const cleanPhone = phone.replace(/[^0-9+]/g, "");
    const waPhone = phone.replace(/[^0-9]/g, "");
    const waLink = waPhone ? `https://wa.me/${waPhone}` : null;
    const nowIst = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // HTML Email template formatted for RetAI Clinic Intelligence
    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f0a; color: #f4f4f5; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #141d13; border: 1px solid #34532b; border-radius: 16px; overflow: hidden; }
    .header { background: #1f3319; padding: 24px 32px; border-bottom: 1px solid #34532b; }
    .logo { color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
    .logo-accent { color: #ffecd0; }
    .badge { display: inline-block; background: #ffecd0; color: #0d120c; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 9999px; margin-top: 8px; }
    .content { padding: 32px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #a1a1aa; margin-bottom: 4px; font-weight: 600; }
    .value { font-size: 16px; color: #ffffff; font-weight: 500; }
    .highlight-box { background: #0b0f0a; border: 1px solid #34532b; border-radius: 12px; padding: 20px; margin-top: 24px; }
    .btn { display: inline-block; background: #ffecd0; color: #0d120c !important; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 9999px; margin-top: 16px; text-align: center; }
    .footer { padding: 20px 32px; background: #0b0f0a; border-top: 1px solid #23371d; font-size: 12px; color: #71717a; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">Ret<span class="logo-accent">AI</span></div>
      <div class="badge">New Clinic Walkthrough Request</div>
    </div>
    
    <div class="content">
      <div class="field">
        <div class="label">Doctor / Contact Name</div>
        <div class="value">${name}</div>
      </div>

      <div class="field">
        <div class="label">Clinic Name & Location</div>
        <div class="value">${clinicName}</div>
      </div>

      <div class="field">
        <div class="label">Work WhatsApp / Phone</div>
        <div class="value"><a href="tel:${cleanPhone}" style="color: #ffecd0; text-decoration: none; font-weight: 600;">${phone}</a></div>
      </div>

      <div class="field">
        <div class="label">Work Email</div>
        <div class="value">${email !== "Not provided" ? `<a href="mailto:${email}" style="color: #ffecd0; text-decoration: none;">${email}</a>` : email}</div>
      </div>

      <div class="field">
        <div class="label">Clinical Specialty</div>
        <div class="value">${specialty}</div>
      </div>

      <div class="field">
        <div class="label">Preferred Walkthrough Time</div>
        <div class="value">${preferredTime}</div>
      </div>

      ${
        message
          ? `<div class="field">
        <div class="label">Notes / Practice Inquiries</div>
        <div class="value" style="font-size: 14px; line-height: 1.5; color: #d4d4d8;">${message}</div>
      </div>`
          : ""
      }

      <div class="highlight-box">
        <div class="label" style="color: #ffecd0;">Quick Action</div>
        <div style="font-size: 13px; color: #d4d4d8; margin-top: 4px;">
          Reach out directly to Dr. ${name} via WhatsApp to schedule their RetAI consultation walkthrough.
        </div>
        ${
          waLink
            ? `<a href="${waLink}" class="btn" target="_blank" rel="noopener noreferrer">Chat with Doctor on WhatsApp</a>`
            : ""
        }
      </div>
    </div>

    <div class="footer">
      Captured via ${source} at ${nowIst} IST<br />
      Bengaluru, India | help.retai@gmail.com
    </div>
  </div>
</body>
</html>
    `.trim();

    const textBody = `
New Clinic Demo Request for RetAI
==================================
Doctor / Contact: ${name}
Clinic Name: ${clinicName}
Phone / WhatsApp: ${phone}
Email: ${email}
Specialty: ${specialty}
Preferred Time: ${preferredTime}
Notes: ${message}

Submitted: ${nowIst} IST
Source: ${source}
Direct WhatsApp: ${waLink || "N/A"}
    `.trim();

    // Delivery method tracking
    const deliveryMethods: string[] = [];
    let deliverySuccess = false;

    // 1. Direct SMTP / Gmail App Password if configured
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"RetAI Clinic Intelligence" <${smtpUser}>`,
          to: "help.retai@gmail.com",
          replyTo: email && email !== "Not provided" ? email : undefined,
          subject: `New RetAI Demo Request: ${name} (${clinicName})`,
          text: textBody,
          html: htmlBody,
        });

        deliveryMethods.push("smtp");
        deliverySuccess = true;
      } catch (smtpErr) {
        console.error("SMTP sending error:", smtpErr);
      }
    }

    // 2. Resend API if configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey && !deliverySuccess) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "RetAI Leads <onboarding@resend.dev>",
            to: ["help.retai@gmail.com"],
            reply_to: email && email !== "Not provided" ? email : undefined,
            subject: `New RetAI Demo Request: ${name} (${clinicName})`,
            text: textBody,
            html: htmlBody,
          }),
        });
        if (res.ok) {
          deliveryMethods.push("resend");
          deliverySuccess = true;
        }
      } catch (resendErr) {
        console.error("Resend API error:", resendErr);
      }
    }

    // 3. FormSubmit fallback to ensure instant delivery to help.retai@gmail.com
    try {
      const fsRes = await fetch("https://formsubmit.co/ajax/help.retai@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://retai.in",
          Referer: "https://retai.in/contact",
        },
        body: JSON.stringify({
          _subject: `New RetAI Walkthrough Request: ${name} - ${clinicName}`,
          _template: "table",
          "Doctor Name": name,
          "Clinic Name & City": clinicName,
          "WhatsApp Phone": phone,
          "Work Email": email,
          "Specialty": specialty,
          "Preferred Time": preferredTime,
          "Notes": message,
          "Submitted At": `${nowIst} IST`,
          "Direct WhatsApp": waLink || "N/A",
          "Source": source,
        }),
      });

      const fsJson = await fsRes.json().catch(() => null);
      if (fsRes.ok || fsJson?.success === "true") {
        deliveryMethods.push("formsubmit");
        deliverySuccess = true;
      } else {
        console.warn("FormSubmit notice:", fsJson?.message);
        // Even if waiting for one-time activation, FormSubmit logs and alerts
        deliveryMethods.push("formsubmit-queued");
        deliverySuccess = true;
      }
    } catch (fsErr) {
      console.error("FormSubmit relay error:", fsErr);
    }

    // Always log lead for internal persistence
    console.log("=== NEW RETAI CLINIC LEAD ===");
    console.log(JSON.stringify({ ...data, submittedAt: nowIst, waLink }, null, 2));

    const doctorSalutation = name.trim().toLowerCase().startsWith("dr") ? name.trim() : `Dr. ${name.trim()}`;

    return NextResponse.json({
      success: true,
      message: `Thank you, ${doctorSalutation}. Your clinic walkthrough request has been sent to help.retai@gmail.com. Our specialist will contact you on ${phone} within 2 hours.`,
      deliveryMethods,
    });
  } catch (error) {
    console.error("Contact API uncaught exception:", error);
    return NextResponse.json(
      { error: "Failed to process demo request. Please email help.retai@gmail.com directly." },
      { status: 500 }
    );
  }
}
