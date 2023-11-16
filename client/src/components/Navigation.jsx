import React from "react";
import "./Navigation.css";
import Input from "./Input";
import Button from "./Button";

export default function Navigation() {
  return (
    <nav>
      <div className="nav__container">
        <span className="logo">Watch What</span>
        <form className="nav__form">
          <Input
            name="title"
            className="navigation__input"
            placeholder="Movie Title"
          />
          <Input
            name="title"
            className="navigation__input"
            placeholder="tags (optional)"
          />
         <Button className="navigation__button">Add Movie</Button>
        </form>
      </div>
    </nav>
  );
}
