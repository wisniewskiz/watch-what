const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

router.get("/api", async (req, res) => {
  const movies = await Movie.find({});
  res.send(movies);
});

router.post("/api", async (req, res) => {
  const movie = new Movie(req.body);
  try {
    await movie.save();
    res.json(movie);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

router.put("/api/:id", async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  movie.watched = !movie.watched;
  await movie.save();
});

router.delete("/api/:id", async (req, res) => {
  const { id } = req.params;
  await Movie.findByIdAndDelete(id);
});

module.exports = router;
