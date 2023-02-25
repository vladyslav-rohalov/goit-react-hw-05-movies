import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Container, H2, List, ListItem, P } from './MoviesList.styled';

export default function MoviesList({ title, movies }) {
  const location = useLocation();
  return (
    <Container>
      {title && <H2>{title}</H2>}
      <List>
        {movies.length > 0 &&
          movies.map(movie => {
            return (
              <ListItem key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  <P>{movie.title}</P>
                </Link>
              </ListItem>
            );
          })}
      </List>
    </Container>
  );
}

MoviesList.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.array,
};
