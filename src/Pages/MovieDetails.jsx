import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, H2, H3, Image, DivFlex } from './MovieDetails.styled';

export default function MovieDetails() {
  const [movieItem, setMovieItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const KEY = '1a79c64c84b315bdc21ee91736e10707';
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`;
    axios
      .get(URL)
      .then(response => {
        setMovieItem(response.data);
      })
      .catch(error => {
        throw new Error(error);
      });
  }, [id]);

  return (
    <Container>
      <DivFlex>
        {movieItem.poster_path && (
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`}
          />
        )}
        <div>
          {movieItem.title && (
            <H2>
              {movieItem.title}
              {`(${movieItem.release_date.slice(0, 4)})`}
            </H2>
          )}
          {movieItem.vote_average && (
            <p>User score: {Math.round(movieItem.vote_average * 10)}%</p>
          )}
          <H3>Overviev</H3>
          <p>{movieItem.overview}</p>
          <H3>Genres </H3>
          {movieItem.genres && (
            <p>{movieItem.genres.map(genre => genre.name).join(', ')}</p>
          )}
        </div>
      </DivFlex>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </Container>
  );
}
