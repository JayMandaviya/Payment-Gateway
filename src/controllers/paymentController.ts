import { Request, Response } from "express";
const Payment = require("../models/payment"); // Ensure correct path

exports.initiatePayment = async function (req: Request, res: Response) {
  try {
    const { productId, email } = req.body;

    const transactionId = Math.random().toString(35).substring(7);

    const payment = await Payment.create({ productId, transactionId, email });

    return res.status(200).json({ payment });
  } catch (error) {
    console.error("Error in initiating payment:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
