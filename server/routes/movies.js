const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

router.get("", async (req, res) => {
  const movies = await Movie.find({});
  res.send(movies);
});

router.post("", async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.redirect("/");
});

module.exports = router;
