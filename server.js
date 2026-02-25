const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MONGODB CLOUD CONNECTION
mongoose.connect("mongodb+srv://gotamgurjar6_db_user:dDtnVoWLaluHzrmU@cluster0.yokftdo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.log("DB Error:", err));

// Test Route
app.get("/", (req, res) => {
  res.send("Billing Software Backend Running...");
});

// ROUTES
const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

const customerRoutes = require("./routes/customerRoutes");
app.use("/customers", customerRoutes);

const billRoutes = require("./routes/billRoutes");
app.use("/bills", billRoutes);

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});