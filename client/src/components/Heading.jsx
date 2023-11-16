import React from 'react';
import './Heading.css';

export default function Heading() {
  return (
    <header>
        <div className="heading__container">
            <span className="heading__title">Your Watch List</span>
            <div className="heading__filter">
                <div className="heading__filter--option active">See All</div>
                <div className="heading__filter--option">Unwatched Only</div>
            </div>
        </div>
    </header>
  )
}
