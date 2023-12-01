import styled from 'styled-components';
import {  Link, NavLink } from 'react-router-dom';


export const BoxDeteils = styled.div`
  padding: 30px;
  margin-top: 70px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 800px;

`;

export const LinkBack = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 400;
  text-transform: uppercase;

  &:hover {
    color: orangered;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 800;
  text-transform: uppercase;

  &:hover {
    color: orangered;
  }
`;