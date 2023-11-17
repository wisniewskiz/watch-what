import React, {useContext, useState} from "react";
import MoviesContext from "../context/movies";
import("./MovieCard.css");

export default function MovieCard({ movieData, id, isWatched }) {
  const { movies, changeWatched } = useContext(MoviesContext);
  const [watched, setWatched ] = useState(isWatched);

  const watchHandler = (event) => {
    const id = event.target.id;
    changeWatched(id);
  }

  const unwatchHandler = (event) => {
    const id = event.target.id;
    changeWatched(id);
  }

const checkWatchStatus = () => {
  if(isWatched) {
    return (
      <div className="card__action--link" id={id} onClick={unwatchHandler}>Unwatch this movie</div>
    )
  } else if(!isWatched) {
    return (
      <div className="card__action--link" onClick={watchHandler} id={id}>Add to Watched List</div>
    )
  }
  };

  return (
    <div className="card">
      <div className="card__body">
        <div
          className="card__image"
          style={{
            background: `url(${movieData.poster}), #262626 50%  / contain no-repeat`,
          }}
        ></div>
        <div className="card__data">
          <div className="card__data--main">
            <span className="title">
              {movieData.title}, {movieData.year}
            </span>
            <p className="synopsis">{movieData.synopsis}</p>
          </div>
          <div className="card__data--footer">
            <div className="genre">
              <span className="footer__title">Genre: </span>{movieData.genre}
            </div>
            <div className="tags">
              <span className="footer__title">Tags: </span>{movieData.tags}
            </div>
          </div>
        </div>
      </div>
      <div className="card__action">
          {checkWatchStatus()};
      </div>
    </div>
  );
}
