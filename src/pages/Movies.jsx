import { useEffect, useState } from "react";
import MovieItem from "../components/MovieItem";
import Header from "../components/Header";
import SelectList from "../components/SelectList";
import Spinner from "../components/Spinner";
import Message from "../components/Message";


const API_KEY = '33bb68e9e0545fd5fb40af39f1172c15';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [list, setList] = useState('popular');

  const handleChange = (e) => {
    setList(e.target.value)
  }

  useEffect(() => {

    const fetchMovies = async () => {
      try {
        setError('');
        const res = await fetch(`https://api.themoviedb.org/3/movie/${list}?api_key=${API_KEY}&language=en-US&page=1`);
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

  },[list])

  

  return(
    <div className="container">
      <Header>
        <h1>Movies: {list.replace(/_/g, ' ')}</h1>
        <SelectList list={list} handleChange={handleChange}/>
      </Header>
      {isLoading &&  <Spinner/>}
      {error && <Message message={error}/>}
      <div className='movies'>
          {movies.map( movie => <MovieItem key={movie.id} movie={movie}/>)}  
      </div>
    </div>
  )
}

export default Movies