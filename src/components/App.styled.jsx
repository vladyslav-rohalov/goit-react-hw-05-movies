import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  height: 4em;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);
  padding: 8px 0;
  margin-bottom: 16px;

  > nav {
    display: flex;
    gap: 10px;
    padding-left: 10px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
