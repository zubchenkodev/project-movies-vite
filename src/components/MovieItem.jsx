import { Link } from "react-router-dom";
import React from 'react';
import {formateDate} from '../functions/formateDate';
import { formateVote } from "../functions/formateVote";

const MovieItem = ({movie}) => {

  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="movie-item">
        <div className="movie-item__image">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster: ${movie.title}`} />
        </div>
        <div className="movie-item__content">
          <h3 className="movie-item__title">{movie.title}</h3>
          <div className="movie-item__info">
            <span>🍿 {formateVote(movie.vote_average)}</span>
            <span>🗓️ {formateDate(movie.release_date)}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MovieItem