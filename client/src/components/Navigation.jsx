import React, { useState, useContext, useEffect } from "react";
import MoviesContext from "../context/movies";
import "./Navigation.css";
import Input from "./Input";
import Button from "./Button";

export default function Navigation() {
  const { addMovie } = useContext(MoviesContext);
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleFormSubmit = (event) => {
    addMovie(event, title);
    setTitle("");
  };

  return (
    <nav>
      <div className="nav__container">
        <span className="logo">Watch What</span>
        <form className="nav__form" onSubmit={handleFormSubmit}>
          <Input
            name="title"
            className="navigation__input"
            placeholder="Movie Title"
            onChange={handleTitleChange}
            value={title}
          />
          <Button className="navigation__button">Add Movie</Button>
        </form>
      </div>
    </nav>
  );
}
