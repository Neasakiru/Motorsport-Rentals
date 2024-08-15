const express = require("express");
const mongoose = require("mongoose");
const port = 8000;
const app = express();

//Middleware
app.use(express.json());

//Connecting to MongoDb
mongoose
  .connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database not connected"));

//MongoDb Schemas
const Schema = mongoose.Schema;

const carSchema = new Schema({
  name: String,
  model: String,
  year: Number,
});

const Car = mongoose.model("Car", carSchema);

//GET - TEST
app.get("/", (req, res) => {
  res.send("Hello from home page!");
});

//GET - /CARS
app.get("/cars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).send("Error retrieving cars");
  }
});

//POST - /CARS
app.post("/cars", async (req, res) => {
  try {
    const newCar = new Car(req.body);
    await newCar.save();
    res.status(200).json(newCar);
  } catch (error) {
    res.status(500).send("Error saving the car");
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
