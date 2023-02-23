import SearchMovies from '../components/SearchMovies/SearchMovies';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MoviesList from '../components/MoviesList/MoviesList';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [moviesFound, setMoviesFound] = useState([]);

  function handleFromSubmit(value) {
    setQuery(value);
  }

  useEffect(() => {
    if (query === '') return;
    const KEY = '1a79c64c84b315bdc21ee91736e10707';
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
    axios
      .get(URL)
      .then(respopnse => {
        setMoviesFound(respopnse.data.results);
      })
      .catch(function (error) {
        throw new Error(error);
      });
  }, [query]);

  return (
    <div>
      <SearchMovies onFormSubmit={handleFromSubmit} />
      <MoviesList movies={moviesFound} title="" />
    </div>
  );
}
