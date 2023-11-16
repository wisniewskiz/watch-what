import React, { useState } from "react";
import "./Navigation.css";
import Input from "./Input";
import Button from "./Button";

export default function Navigation() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value.replace(/\s/, "-"));
  };
  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = "http://www.omdbapi.com/?apikey=cd9a8baf&t=";
    const request = await fetch(`${apiUrl}${title}`);
    const data = await request.json();
    const newMovie = {
      title: data.Title,
      year: data.Year,
      poster: data.Poster,
      synopsis: data.Plot,
    };
    console.log(JSON.stringify(newMovie));
    const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie)
  };
  try {
    const response = await fetch('http://127.0.0.1:3000/api', settings);
    console.log(response);
    const responseData = await response.json();
    console.log(JSON.stringify(responseData));
  } catch (error) {
    console.log(error);
  };

    // fetch(`http://127.0.0.1:3000/api`, {
    //   method: "POST",
    //   header: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newMovie),
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });
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
          />
          <Input
            name="title"
            className="navigation__input"
            placeholder="tags (optional)"
            onChange={handleTagsChange}
          />
          <Button className="navigation__button">Add Movie</Button>
        </form>
      </div>
    </nav>
  );
}
