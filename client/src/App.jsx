import "./App.css";
import Navigation from "./components/Navigation";
import FlashMessage from "./components/FlashMessage";
import Heading from "./components/Heading";
import MovieList from "./components/MovieList";

function App() {
  
  return (
    <>
      <Navigation />
      <FlashMessage />
      <Heading />
      <MovieList />
    </>
  );
}

export default App;
