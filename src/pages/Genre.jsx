import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import MovieItem from '../components/MovieItem';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
const API_KEY = '33bb68e9e0545fd5fb40af39f1172c15';
import Spinner from "../components/Spinner";
import Message from "../components/Message";


const Genre = () => {
    const {id}  = useParams();
    
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const genre = searchParams.get('genre');


    useEffect(() => {

        const fetchMovies = async () => {
        try {
            setError('');
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`);
            if(!res.ok) throw new Error ('Something went wrong. Try again later')
            const data = await res.json();
            setMovies(data.results);
        }
        catch(error) {
            console.error(error.message);
            setError(error.message)
        }
        finally {
            setIsLoading(false)
        }
        }
        fetchMovies();

    },[])

    return(
        <div className="container">
            <Header>
                <BackButton>Back</BackButton>
                <h1>Genre: {genre}</h1>
            </Header>
            {isLoading && <Spinner/>}
            {error && <Message message={error}/>}
            <div className='movies'>
                {movies.map( movie => <MovieItem key={movie.id} movie={movie}/>)}  
            </div>
        </div>
    )

}

export default Genre