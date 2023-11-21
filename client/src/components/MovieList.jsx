import React, { useEffect, useContext } from "react";
import MovieCard from "./MovieCard";
import MoviesContext from "../context/movies";
import "./MovieList.css";

export default function MovieList() {
  const { movies, updateMovies } = useContext(MoviesContext);

  useEffect(() => {
    if (!movies) {
      updateMovies();
    }
  }, [movies]);
  const renderMovies =
    movies &&
    movies.map((movie) => {
      return (
        <MovieCard
          movieData={movie}
          key={movie._id}
          id={movie._id}
          isWatched={movie.watched}
          isVisible={movie.isVisible}
        />
      );
    });
  return (
    <section>
      <div className="movies__container">{renderMovies}</div>
    </section>
  );
}
