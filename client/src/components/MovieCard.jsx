import React from "react";
import("./MovieCard.css");

export default function MovieCard({ movieData }) {
  return (
    <div className="card">
      <div className="card__body">
        <div className="card__image" style={{
            background: `url(${movieData.poster}), lightgray 50% / cover no-repeat`
        }}></div>
        <div className="card__data">
          <div className="card__data--main">
            <span className="title">
              {movieData.title}, {movieData.year}
            </span>
            <p className="synopsis">{movieData.synopsis}</p>
          </div>
          <div className="card__data--footer">
            <div className="genre">
              <span className="footer__title">Genre: </span>Drama, Musical,
              Romance
            </div>
            <div className="tags">
              <span className="footer__title">Tags: </span>Fernando, Cryfest,
              French, Foreign
            </div>
          </div>
        </div>
      </div>
      <div className="card__action">
        <div className="card__action--link">Edit Details</div>
        <div className="card__action--link">Add to Watched List</div>
      </div>
    </div>
  );
}
