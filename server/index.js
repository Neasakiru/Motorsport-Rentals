const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8000;
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Connecting to MongoDb
mongoose
  .connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database not connected"));

//MongoDb Schemas
const Schema = mongoose.Schema;

const carSchema = new Schema({
  url: String,
  name: String,
  model: String,
  year: Number,
  reservationId: String,
});

const reservationSchema = new Schema({
  name: String,
  startDate: Date,
  endDate: Date,
});

const Car = mongoose.model("Car", carSchema);
const Reservation = mongoose.model("Reservation", reservationSchema);

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

//JSON FORMAT - YYYY-MM-DDTHH:MM:SSZ

//GET - RESERVATIONS
app.get("/reservations", async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    res.status(500).send(error);
  }
});

//POST - /RESERVATIONS
app.post("/reservations", async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(200).json(newReservation);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
