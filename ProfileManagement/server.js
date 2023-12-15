const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");
const profileRouter=require('./Routes/ProfileRoute')
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const DB_URI = process.env.DB_URI;
const port = process.env.port || 3090;

mongoose
  .connect(DB_URI, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB"));
app.listen(port, () => {
  console.log(`The Server is running on Port ${port}`);
});
app.use('/profileManagement',profileRouter)
app.get('/', (req,res) => {
  res.json({'message':'Hello There!'})
})
