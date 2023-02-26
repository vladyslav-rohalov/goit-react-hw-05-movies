import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Nav } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <div>
      <Header>
        <Nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Suspense>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </div>
  );
}
