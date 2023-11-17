import React, { useEffect, useState, useContext } from "react";
import MovieCard from "./MovieCard";
import MoviesContext from "../context/movies";
import "./MovieList.css";

export default function MovieList() {
  const { movies, updateMovies } = useContext(MoviesContext);

  useEffect(() => {
    updateMovies();
  }, []);
  const renderMovies =
    movies &&
    movies.map((movie) => {
      return <MovieCard movieData={movie} key={movie._id} id={movie._id} isWatched={movie.watched} />;
    });
  return (
    <section>
      <div className="movies__container">{renderMovies}</div>
    </section>
  );
}
