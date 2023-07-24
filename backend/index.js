const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config();

const productRouter = require("./routes/productRoute");
const app = express();

const mongodbURI = process.env.MONGODB_URL;
mongoose.connect(mongodbURI);
const db = mongoose.connection;


db.on("error", console.error.bind(console, 'MongoDB connection error => '));

db.once("open", () => {
    console.log("Connection Successfully");
});
app.use(express.json());
app.use(productRouter);

app.listen(4000, "0.0.0.0", () =>{
    console.log("Server at 4000");
});