import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Gallery, H2, Movie, Img, P } from './MoviesList.styled';

export default function MoviesList({ title, movies }) {
  const location = useLocation();
  return (
    <div>
      {title && <H2>{title}</H2>}
      <div>
        <Gallery>
          {movies.length > 0 &&
            movies.map(movie => {
              return (
                <Movie key={movie.id}>
                  <Link
                    to={`/movies/${movie.id}`}
                    state={{ from: location }}
                    style={{ textDecoration: 'none' }}
                  >
                    {movie.poster_path ? (
                      <Img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.name}
                      />
                    ) : (
                      <Img
                        src={require('../../image/noImage.png')}
                        alt={movie.name}
                      />
                    )}

                    <P>{movie.title}</P>
                  </Link>
                </Movie>
              );
            })}
        </Gallery>
      </div>
    </div>
  );
}

MoviesList.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.array,
};
