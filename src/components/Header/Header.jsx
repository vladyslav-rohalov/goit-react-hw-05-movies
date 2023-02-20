import { HeaderStyled, NavStyled, AStyled } from './Header.styled';

export default function Header() {
  return (
    <HeaderStyled>
      <NavStyled>
        <AStyled href="#">Home</AStyled>
        <AStyled href="#">Movies</AStyled>
      </NavStyled>
    </HeaderStyled>
  );
}
