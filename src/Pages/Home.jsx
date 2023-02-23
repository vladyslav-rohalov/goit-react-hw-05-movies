import { useState, useEffect } from 'react';
import axios from 'axios';
import MoviesList from '../components/MoviesList/MoviesList';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const KEY = '1a79c64c84b315bdc21ee91736e10707';
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;
    axios
      .get(URL)
      .then(respopnse => {
        setTrendingMovies(respopnse.data.results);
      })
      .catch(function (error) {
        throw new Error(error);
      });
  }, []);

  return <MoviesList movies={trendingMovies} title="Trending today" />;
}
