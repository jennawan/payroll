const Payslip = require("../models/Payslip");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");
const router = require("express").Router();

//CREATE
router.post("/", verifyToken, async (req, res) => {
  try {
    const existedPayslip = await Payslip.findOne({
      userId: req.body.userId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      payStartDate: req.body.payStartDate,
      pay: req.body.pay,
    });
    if (existedPayslip) {
      res.status(409).json("Payslip already exists");
    } else {
      const newPayslip = new Payslip(req.body);
      const savedPayslip = await newPayslip.save();
      res.status(200).json(savedPayslip);
    }
  } catch (err) {
    res.status(400).json("Bad Request");
  }
});

//GET all Payslip by userID
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const payslips = await Payslip.find({ userId: req.params.userId });
    if (payslips) {
      res.status(200).json(payslips);
    } else {
      res.status(404).json("Payslip not found!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET payslip by payslip id
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const payslip = await Payslip.findOne({ _id: req.params.id });
    if (payslip) {
      res.status(200).json(payslip);
    } else {
      res.status(404).json("Payslip not found!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
