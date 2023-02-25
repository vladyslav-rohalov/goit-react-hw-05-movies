import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import {
  Container,
  H2,
  H3,
  Image,
  DivFlex,
  UL,
  LI,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [movieItem, setMovieItem] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? 'movies';

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
      <Link to={backLinkHref}>
        <button type="button">← Go back</button>
      </Link>

      {movieItem !== null && (
        <DivFlex>
          {movieItem.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`}
            />
          ) : (
            <Image src={require('../image/noImage.png')} />
          )}
          <div>
            {movieItem.title && (
              <H2>
                {movieItem.title}
                {`(${movieItem.release_date.slice(0, 4)})`}
              </H2>
            )}
            {movieItem.vote_average > 0 && (
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
      )}
      {movieItem !== null && (
        <UL>
          <LI>
            <Link to="cast">Cast</Link>
          </LI>
          <LI>
            <Link to="reviews">Reviews</Link>
          </LI>
        </UL>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
}
