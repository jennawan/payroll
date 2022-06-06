const mongoose = require("mongoose");

const EmployeeInfoSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    annualSalary: {
      type: Number,
      required: true,
    },
    superannuationRate: {
      type: Number,
      required: true,
    },
    payStartDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EmployeeInfo", EmployeeInfoSchema);
