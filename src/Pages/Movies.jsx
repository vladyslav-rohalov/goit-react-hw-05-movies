import { useSearchParams } from 'react-router-dom';
import SearchMovies from '../components/SearchMovies/SearchMovies';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MoviesList from '../components/MoviesList/MoviesList';

export default function Movies() {
  const [moviesFound, setMoviesFound] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  function handleFromSubmit(query) {
    const queryParams = query !== '' ? { query } : {};
    setSearchParams(queryParams);
  }

  useEffect(() => {
    if (searchParams === '') return;
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
  }, [searchParams, query]);

  return (
    <div>
      <SearchMovies onFormSubmit={handleFromSubmit} value={query} />
      <MoviesList movies={moviesFound} title="" />
    </div>
  );
}
