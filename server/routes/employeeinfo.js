const EmployeeInfo = require("../models/EmployeeInfo");
const { verifyToken } = require("./verifyToken");
const router = require("express").Router();

//CREATE
router.post("/", verifyToken, async (req, res) => {
    const newEmployeeInfo = new EmployeeInfo(req.body)

    try {
        const savedEmployeeInfo = await newEmployeeInfo.save();
        res.status(200).json(savedEmployeeInfo)
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET user EmployeeInfo by userID

module.exports = router;