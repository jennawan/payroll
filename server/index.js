const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const authRoute = require("./routes/auth");
const employeeInfoRoute = require("./routes/employeeInfo");
const payslipRoute = require("./routes/payslip");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection successful."))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/employeeInfo", employeeInfoRoute);
app.use("/api/v1/payslip", payslipRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running.");
});
