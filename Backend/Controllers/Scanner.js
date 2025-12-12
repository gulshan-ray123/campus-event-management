const QRCode = require('qrcode');
const nodemailer = require('nodemailer');
const dotenv= require('dotenv');
const jwt= require('jsonwebtoken');
dotenv.config();
const sendEventQR = async (student, event) => {
  //try {
    // 1. Generate QR payload (unique + secure)
  //   const payload = JSON.stringify({
  //     studentId: student.studentId,
  //     eventId: event._id,
  //     issuedAt: Date.now(),
  //   });

  //   // 2. Generate QR code as Data URL
  //   const qrDataUrl = await QRCode.toDataURL(payload);

  //   // 3. Configure email transporter
  //   const transporter = nodemailer.createTransport({
  //     service: 'gmail', // or SMTP config
  //     auth: {
  //       user: process.env.EMAIL_USER,
  //       pass: process.env.EMAIL_PASS,
  //     },
  //   });

  //   // 4. Send email with QR embedded
  //   await transporter.sendMail({
  //     from: '"Event Portal" <gniot@college.com>',
  //     to: student.email,
  //     subject: `Your Pass for ${event.name}`,
  //     html: `
  //       <h3>Hello ${student.name},</h3>
  //       <p>You are registered for <b>${event.name}</b>.</p>
  //       <p>Show this QR code at entry:</p>
  //       <img src="${qrDataUrl}" alt="Event QR Code"/>
  //     `,
  //   });

  //   console.log("QR sent successfully!");
  // } catch (err) {
  //   console.error("Error sending QR:", err);
  // }
const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
console.log(decoded.email);
};

module.exports=sendEventQR;