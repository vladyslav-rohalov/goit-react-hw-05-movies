import { Link } from 'react-router-dom';
import { Container, H2, List, ListItem, P } from './MoviesList.styled';

export default function MoviesList({ title, movies }) {
  return (
    <Container>
      {title && <H2>{title}</H2>}
      <List>
        {movies.length > 0 &&
          movies.map(movie => {
            return (
              <ListItem key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <P>{movie.title}</P>
                </Link>
              </ListItem>
            );
          })}
      </List>
    </Container>
  );
}
