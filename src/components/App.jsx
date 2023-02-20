import Movies from './Movies/Movies';
import Header from './Header/Header';
import { useState, useEffect } from 'react';
import { trandingMovies } from './Api Service/ApiService';
import axios from 'axios';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  trandingMovies();

  // useEffect(() => {
  //   if (query === '') return;
  //   function serverRequest() {
  //     const KEY = '1a79c64c84b315bdc21ee91736e10707';
  //     const URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;

  //     axios
  //       .get(URL)
  //       .then(respopnse => console.log(respopnse.data.results))
  //       .catch(function (error) {
  //         throw new Error(error);
  //       });
  //   }

  //   serverRequest();
  // }, [query, page]);

  function handleFromSubmit(value) {
    setQuery(value);
  }

  return (
    <div>
      <Header />
      <Movies onFormSubmit={handleFromSubmit} />
    </div>
  );
};
