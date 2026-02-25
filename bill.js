const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
            qty: { type: Number, required: true },
            price: Number,
            gst: Number
        }
    ],
    totalAmount: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Bill", billSchema);