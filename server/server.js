const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const port = 3000;
const moviesRoutes = require("./routes/movies");
const app = express();

mongoose.connect("mongodb://localhost:27017/movies");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("database connected");
});

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// const title = "love-songs"
const apiUrl = "http://www.omdbapi.com/?apikey=cd9a8baf&t=";

const getMovieData = async (title) => {
  await axios.get(`${apiUrl}${title}`).then((res) => {
    console.log(res.data);
  });
};

// getMovieData("love-songs");

app.use(express.json());

app.use("/", moviesRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});