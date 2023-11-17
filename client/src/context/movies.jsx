import { createContext, useState } from "react";

const MoviesContext = createContext();

function Provider({ children }) {
  const [movies, setMovies] = useState("");

  const moviesState = {
    movies,

    updateMovies: async () => {
      const movieList = await fetch("http://127.0.0.1:3000/api");
      const movies = await movieList.json();
      setMovies((currentMovies) => (currentMovies = movies));
    },

    addMovie: async (event, title, tags) => {
      event.preventDefault();
      const apiUrl = "http://www.omdbapi.com/?apikey=cd9a8baf&t=";
      const request = await fetch(`${apiUrl}${title}`);
      const data = await request.json();
      const newMovie = {
        title: data.Title,
        year: data.Year,
        poster: data.Poster,
        synopsis: data.Plot,
        genre: data.Genre,
        tags: tags
      };
      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie),
      };
      try {
        await fetch("http://127.0.0.1:3000/api", settings);
        updateMovies();
      } catch (error) {
        console.log(error);
      }
    },

    changeWatched: async(id) => {
        const settings = {
            method: "PUT",
          };
          try {
            await fetch(`http://127.0.0.1:3000/api/${id}`, settings);
          } catch (error) {
            console.log(error)
          }
    }, 

    removeWatched: () => {
        setMovies((currentMovies) => currentMovies.filter((movie) => movie.watched != true));
        console.log(movies);
    }
  };
  return (
    <MoviesContext.Provider value={moviesState}>
      {children}
    </MoviesContext.Provider>
  );
}

export { Provider };
export default MoviesContext;
