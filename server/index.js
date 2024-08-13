const express = require("express");
const { MongoOIDCError } = require("mongodb");
const mongoose = require("mongoose");
const port = 8000;
const app = express();
//db connection
mongoose
  .connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database not connected"));

const carSchema = new mongoose.Schema({
  name: String,
  model: String,
  year: Number,
});

const Car = mongoose.model("Car", carSchema);

app.get("/users", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).send("Error retrieving cars");
  }
});

app.get("/", (req, res) => {
  res.send("Hello from the other side2");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
