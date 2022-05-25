const Payslip = require("../models/Payslip");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");
const router = require("express").Router();

//CREATE
router.post("/", verifyToken, async (req, res) => {
    const newPayslip = new Payslip(req.body)

    try {
        const savedPayslip = await newPayslip.save();
        res.status(200).json(savedPayslip)
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET all Payslip by userID
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const payslips = await Payslip.find({ userId: req.params.userId })
        res.status(200).json(payslips);
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET payslip by payslip id
router.get("/:id", verifyToken, async (req, res) => {
    try {
        const payslip = await Payslip.findOne({ _id: req.params.id })
        res.status(200).json(payslip);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;