const express = require("express");
const router = express.Router();
const Bill = require("../models/bill");

router.post("/add", async (req, res) => {
    try {
        const bill = new Bill(req.body);
        await bill.save();
        res.json({ success: true, message: "Bill Created" });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
});

router.get("/list", async (req, res) => {
    try {
        const bills = await Bill.find().populate("customerId").populate("items.productId");
        res.json({ success: true, data: bills });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
});

module.exports = router;