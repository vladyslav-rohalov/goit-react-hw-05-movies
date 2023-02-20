import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  position: relative;
  height: 4em;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);
`;

export const NavStyled = styled.nav`
  position: absolute;
  top: 50%;
  margin-top: -0.625em;
  padding-left: 20px;
`;

export const AStyled = styled.a`
  font-weight: 500;
  text-decoration: none;
  margin-right: 10px;
  color: #0a0a0a;
  &:hover {
    color: tomato;
  }
  &:focus {
    color: tomato;
  }
`;
