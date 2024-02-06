// src/services/mail.ts

const nodemailer = require("nodemailer");

exports.sendVerificationCode = async (email: string, code: string) => {
  try {
    var transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "jaymandaviya10@gmail.com",
      to: email,
      subject: "Verification Code",
      text: `Verification code is: ${code}`,
    });

    console.log("Verification code sent successfully");
  } catch (error) {
    console.log("Error in sending code:", error);
    throw error;
  }
};
