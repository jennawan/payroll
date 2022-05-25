const mongoose = require("mongoose")

const PayslipSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        firstName: {
            type: String, required: true
        },
        lastName: {
            type: String, required: true
        },
        payStartDate: {
            type: Date, required: true
        },
        payFrequency: {
            type: String, default: "Monthly"
        },
        annualSalary: {
            type: Number, required: true
        },
        grossIncome: {
            type: Number, required: true
        },
        tax: {
            type: Number, required: true
        },
        netIncome: {
            type: Number, required: true
        },
        superannuation: {
            type: Number, required: true
        },
        pay: {
            type: Number, required: true
        }
    }, { timestamps: true }
);

module.exports = mongoose.model("Payslip", PayslipSchema);