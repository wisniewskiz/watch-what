import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

export default function MovieList() {
  const [data, setData] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetch("http://127.0.0.1:3000/api");
      const movies = await data.json();
      console.log(movies);
      setData((currentData) => (currentData = movies));
    };
    getMovies();
  }, [MovieCard]);
  return (
    <section>
      <div className="movies__container">
        {/* <MovieCard movieData={data[0]} /> */}
      </div>
    </section>
  );
}
