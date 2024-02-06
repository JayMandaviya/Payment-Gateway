const Payment = require("../models/payment");
const { sendVerificationCode } = require("../services/mail");
import { Request, Response } from "express";

const {
  generateVerificationCode,
  verifyCode,
} = require("../services/verification");

exports.verificationCodehandler = async function (req: Request, res: Response) {
  try {
    const { transactionId } = req.body;
    const payment = await Payment.findOne({ where: { transactionId } });

    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }

    const newVerificationCode = generateVerificationCode();
    payment.verificationCode = newVerificationCode;
    await payment.save();

    await sendVerificationCode(payment.email, newVerificationCode);

    return res
      .status(200)
      .json({ message: "Verification code sent successfully" });
  } catch (error) {
    console.error("Error in sending verification code:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.verifyCodeHandler = async function (req: Request, res: Response) {
  try {
    const { transactionId, code } = req.body;

    const payment = await Payment.findOne({ where: { transactionId } });
    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }

    const isValid = verifyCode(code, payment.verificationCode);
    if (!isValid) {
      return res.status(400).json({ error: "Invalid verification code" });
    }

    return res
      .status(200)
      .json({ message: "Verification code verified successfully" });
  } catch (error) {
    console.error("Error verifying code:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
