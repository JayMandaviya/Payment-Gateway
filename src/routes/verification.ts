import express from "express";
const {
  verificationCodehandler,
  verifyCodeHandler,
} = require("../controllers/verification");

const router = express.Router();

router.post("/send-verification-code", verificationCodehandler);
router.post("/verify-code", verifyCodeHandler);

module.exports = router;
