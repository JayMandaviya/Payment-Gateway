const express = require("express");
const { initiatePayment } = require("../controllers/paymentController");
import { Request, Response } from "express";

const router = express.Router();

router.post("/initiate-payment", (req: Request, res: Response) => {
  // This is where you handle the route logic
  initiatePayment(req, res);
});

module.exports = router;
