// import { useState } from 'react';
// import axios from 'axios';

// export function getTrandingMovies() {
//   const [popularMovies, setPopularMovies] = useState();

//   const KEY = '1a79c64c84b315bdc21ee91736e10707';
//   const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;
//   axios
//     .get(URL)
//     .then(respopnse => {
//       setPopularMovies(respopnse.data.results);
//     })
//     .catch(function (error) {
//       throw new Error(error);
//     });
// }
