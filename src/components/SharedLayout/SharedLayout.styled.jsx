import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  display: flex;
  gap: 10px;
  height: 3em;

  @media (max-width: 767px) {
    max-width: 480px;
  }
  @media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  @media (max-width: 767px) {
    max-width: 480px;
  }
  @media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  height: 6em;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);
  padding: 8px 0;
  margin-bottom: 16px;
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
