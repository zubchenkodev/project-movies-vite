import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import BackButton from '../components/BackButton';
import { formateRuntime } from '../functions/formateRuntime';
import { formateDate } from '../functions/formateDate';
import {formateVote} from '../functions/formateVote';
import Spinner from "../components/Spinner";
import Message from "../components/Message";



const Movie = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setError('');
                const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=33bb68e9e0545fd5fb40af39f1172c15&language=en-US`);
                if(!res.ok) throw new Error ('Something went wrong. Try again later')
                const data = await res.json();
                setMovie(data)
                console.log(data)
            }
            catch(error) {
                console.error(error.message)
            }
            finally {
                setIsLoading(false)
            }

        }
        fetchMovie();
    }, [id]);


    return (
        <div className="movie-container">
        {isLoading && <Spinner/>}
        {error && <Message message={error}/>}
        <div className="movie">
                <BackButton>Back</BackButton>
                <div className="movie__banner">
                    <div className="banner-overlay"></div>
                    <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={`Banner: ${movie.title}`} />
                    <div className="movie__header">
                        <h2>{movie.title}</h2>
                        {movie.tagline && <h3>{movie.tagline}</h3>}
                        {movie.homepage && <a className='button' href={movie.homepage} target="_blank">official page</a>}
                    </div>
                </div>
                <div className="movie__content">
                <div className="movie__poster">
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={`Poster: ${movie.title}`} />
                </div>
                <div className="movie__info">
                    <div className="movie__overview">
                        <h3>{`${movie.title} synopsis:`}</h3>
                        <p>{movie.overview}</p>
                    </div>
                    <div className="movie__details">
                        <div className="movie__genres">
                            <h4>Genre</h4>
                            <div className="genres-grid">
                            { movie.genres &&
                                movie.genres.map(genre => 
                                    <Link className='genre-link' to={`/genres/${genre.id}?genre=${genre.name.toLowerCase()}`}>{genre.name}</Link>
                                )
                            }
                            </div>
                        </div>
                        <div className="movie__runtime">
                            <h4>Runtime</h4>
                            <p>{formateRuntime(movie.runtime)}</p>
                        </div>
                        <div className="movie__date">
                            <h4>Release date</h4>
                            <p>{formateDate(movie.release_date)}</p>
                        </div>
                        <div className="movie__vote">
                            <h4>Average vote</h4>
                            <p>{formateVote(movie.vote_average)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </div>   
    )
}

export default Movie