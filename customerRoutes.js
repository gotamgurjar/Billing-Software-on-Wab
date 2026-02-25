const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");

// Add Customer
router.post("/add", async (req, res) => {
    try {
        const customer = new Customer(req.body);
        await customer.save();
        res.json({ success: true, message: "Customer Added" });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
});

// List Customers  ← यह चाहिए
router.get("/list", async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json({ success: true, data: customers });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
});

module.exports = router;