import React, { useContext, useState } from "react";
import MoviesContext from "../context/movies";
import("./MovieCard.css");

export default function MovieCard({ movieData, id, isWatched, isVisible }) {
  const { changeWatched, deleteMovie } = useContext(MoviesContext);
  const [watched, setWatched] = useState(isWatched);

  const watchHandler = (event) => {
    const id = event.target.id;
    changeWatched(id);
    setWatched((current) => (current = !watched));
  };

  const unwatchHandler = (event) => {
    const id = event.target.id;
    changeWatched(id);
    setWatched((current) => (current = !watched));
  };

  const deleteHandler = (event) => {
    deleteMovie(event.target.id);
  };

  const checkWatchStatus = () => {
    if (watched) {
      return (
        <div className="card__action--link" id={id} onClick={unwatchHandler}>
          Unwatch this movie
        </div>
      );
    } else if (!watched) {
      return (
        <div className="card__action--link" onClick={watchHandler} id={id}>
          Add to Watched List
        </div>
      );
    }
  };

  const renderTags = (movieData) => {
    if (movieData.tags != "") {
      return (
        <div className="tags">
          <span className="footer__title">Tags: </span>
          {movieData.tags}
        </div>
      );
    }
  };

  return (
    <div className="card">
        <div className="card__body">
          <div className="card__image">
            <img
              src={movieData.poster}
              alt={`poster for ${movieData.title}`}
              className="cardPoster"
            />
          </div>
          <div className="card__data">
            <div className="card__data--main">
              <span className="title">
                {movieData.title}, {movieData.year}
              </span>
              <p className="synopsis">{movieData.synopsis}</p>
            </div>
            <div className="card__data--footer">
              <div className="genre">
                <span className="footer__title">Genre: </span>
                {movieData.genre}
              </div>
              {renderTags(movieData)}
            </div>
          </div>
        </div>
        <div className="card__action">
          <div className="card__action--link" id={id} onClick={deleteHandler}>
            Delete Movie
          </div>
          {checkWatchStatus()}
        </div>
      </div>
  );
}
