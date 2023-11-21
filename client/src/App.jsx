import "./App.css";
import { useContext } from "react";
import MoviesContext from "./context/movies";
import Navigation from "./components/Navigation";
import Heading from "./components/Heading";
import MovieList from "./components/MovieList";
import FlashMessage from "./components/FlashMessage";

function App() {
  const { errorFlash } = useContext(MoviesContext);
  const errorHandler = (errorFlash) => {
    if(errorFlash) {
      return <FlashMessage />
    }
  }
  return (
    <>
      <Navigation />
      {errorHandler(errorFlash)};
      <Heading />
      <MovieList />
    </>
  );
}

export default App;
