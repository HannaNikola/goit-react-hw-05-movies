import styled from 'styled-components';
import {Link } from 'react-router-dom';

export const Title = styled.h1`
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

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
// export const BoxCard = styled.div`
//   display: flex;
//   width: 300px;
//   height: 400px;
//   border: 1px solid black;

// `;