const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const paymentRoutes = require("./routes/payment");
const verificationRoutes = require("./routes/verification");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/payment", paymentRoutes);
app.use("/verification", verificationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
