import { Routes, Route } from 'react-router-dom';
import { Header, Link } from './App.styled';
import Home from '../Pages/Home';
import Movies from '../Pages/Movies';
import MovieDetails from 'Pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Revies';
import NotFound from '../Pages/NotFound';

export const App = () => {
  return (
    <div>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
