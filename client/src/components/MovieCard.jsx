import React, {useContext} from "react";
import MoviesContext from "../context/movies";
import("./MovieCard.css");

export default function MovieCard({ movieData, id }) {
  const { movies, changeWatched } = useContext(MoviesContext);
  const watchHandler = (event) => {
    const id = event.target.id;
    // console.log(movies);
    console.log(id);
    changeWatched(id);
  }

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
        {/* <div className="card__action--link">Edit Details</div> */}
        <div className="card__action--link" onClick={watchHandler} id={id}>Add to Watched List</div>
      </div>
    </div>
  );
}
