import React, {useContext, useState} from 'react';
import MoviesContext from '../context/movies';
import className from 'classnames';
import './Heading.css';

export default function Heading() {
  const {movies, removeWatched, updateMovies} = useContext(MoviesContext);
  const [active, setActive] = useState('all');

  const allClassName = className('heading__filter--option', 
 { 'active' : active === "all"}
  )
  const filterClassName = className('heading__filter--option', 
 { 'active' : active === "filter"}
  )

  const handleFilter = (event) => {
    setActive('filter');
    removeWatched();
  }

  const handleAll = (event) => {
    setActive('all');
    updateMovies();

    
  }
  return (
    <header>
        <div className="heading__container">
            <span className="heading__title">Your Watch List</span>
            <div className="heading__filter">
                <div className={allClassName} onClick={handleAll}>See All</div>
                <div className={filterClassName} onClick={handleFilter}>Unwatched Only</div>
            </div>
        </div>
    </header>
  )
}


// "heading__filter"