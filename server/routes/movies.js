const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

router.get("/api", async (req, res) => {
  // res.setHeader({'Content-Type': 'application/json'});
  const movies = await Movie.find({});
  res.json(movies);
});

router.post("", async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.redirect("/");
});

module.exports = router;
