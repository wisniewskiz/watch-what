const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");
const bodyParser = require("body-parser");


router.get("/api", async (req, res) => {
  const movies = await Movie.find({});
  res.send(movies);
});

router.post("/api", async (req, res) => {
  const movie = await new Movie(req.body);
  const newMovie = await movie.save();
  console.log(newMovie);
});

module.exports = router;
