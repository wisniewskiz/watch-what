import { createContext, useState } from "react";

const MoviesContext = createContext();

function Provider({ children }) {
  const [movies, setMovies] = useState("");
  const [errorFlash, setErrorFlash] = useState(false);
  const moviesState = {
    movies,
    errorFlash,

    updateMovies: async () => {
      const movieList = await fetch("http://127.0.0.1:3000/api");
      const moviesData = await movieList.json();
      setMovies((currentMovies) => (currentMovies = moviesData));
    },

    addMovie: async (event, title, tags) => {
      event.preventDefault();
      const apiUrl = "http://www.omdbapi.com/?apikey=cd9a8baf&t=";
      const request = await fetch(`${apiUrl}${title}`);
      const data = await request.json();
      if (data.Response == "False") {
          setErrorFlash(true);
          setTimeout(() => {setErrorFlash(false)}, 5000);
      } else {
        const newMovie = {
          title: data.Title,
          year: data.Year,
          poster: data.Poster,
          synopsis: data.Plot,
          genre: data.Genre,
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
          await fetch("http://127.0.0.1:3000/api", settings)
            .then((response) => response.json())
            .then((data) => {
              newMovie._id = data._id;
            });
          setMovies((currentMovies) => (currentMovies = [...movies, newMovie]));
        } catch (error) {
          console.log("something happened");
          setErrorFlash(true);
        }
      }
    },

    deleteMovie: async (id) => {
      const filtered = movies.filter((movie) => movie._id != id);
      setMovies((currentMovies) => (currentMovies = filtered));
      const settings = {
        method: "DELETE"
      }
      try {
        await fetch(`http://127.0.0.1:3000/api/${id}`, settings)
      } catch (error) {
        console.log(error);
      }
    },

    changeWatched: async (id) => {
      const settings = {
        method: "PUT",
      };
      try {
        movies.map((movie) => {
          movie._id == id && (movie.watched = !movie.watched);
        });
        await fetch(`http://127.0.0.1:3000/api/${id}`, settings);
      } catch (error) {
        console.log(error);
      }
    },

    filterWatched: () => {
      const filtered = movies.filter((movie) => movie.watched === false);
      setMovies((currentMovies) => (currentMovies = filtered));
    },
  };
  return (
    <MoviesContext.Provider value={moviesState}>
      {children}
    </MoviesContext.Provider>
  );
}

export { Provider };
export default MoviesContext;
