const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// Add Product
router.post("/add", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.json({ success: true, product });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
});

// Get All Products
router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

module.exports = router;
router.get("/list", async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ success: true, data: products });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
});
