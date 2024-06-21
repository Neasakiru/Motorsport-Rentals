const express = require("express");
const mongoose = require("mongoose");

const app = express();
//db connection
mongoose
  .connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database not connected"));

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
