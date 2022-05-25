const mongoose = require("mongoose")

const EmployeeInfoSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        annualSalary: {
            type: Number,
        },
        superannuation: {
            type: Number,
        },
        payStartDate: {
            type: Date,
        }

    }, { timestamps: true }
);

module.exports = mongoose.model("EmployeeInfo", EmployeeInfoSchema);