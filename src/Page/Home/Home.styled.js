import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    color: orangered;
  }
`;