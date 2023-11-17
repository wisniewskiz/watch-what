const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");
const movie = require("../models/movie");

router.get("/api", async (req, res) => {
  const movies = await Movie.find({});
  res.send(movies);
});

router.post("/api", async (req, res) => {
  const movie = await new Movie(req.body);
  const newMovie = await movie.save();
  console.log(newMovie);
});

router.put("/api/:id", async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  movie.watched = !movie.watched;
  await movie.save();
});

module.exports = router;
