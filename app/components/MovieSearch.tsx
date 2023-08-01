"use client"
import {useState} from 'react'
import { searchMovies } from '../services/movie.service';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

const MovieSearch = () => {
    const [movie, setMovie] = useState([]);

    const handleSearch = async (query:string) => {
        const results = await searchMovies(query);
        setMovie(results);
    }

  return (
    <div>
        <SearchBar onSearch={handleSearch}/>
        <div className='grid grid-cols-4 gap-7 mt-20'>
            {movie.map((movie:any) => (
                <MovieCard key={movie.id} title={movie.title} overview={movie.overview} posterPath={movie.poster_path}/>
            ))}
        </div>
      
    </div>
  )
}

export default MovieSearch
