import styled from 'styled-components';
import {Link } from 'react-router-dom';

export const Title = styled.h1`
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 50px;
`;

export const LinkBack = styled(Link)`
  color: red;
  text-decoration: none;
  font-weight: 400;
  text-transform: uppercase;
  

  &:hover {
    color: orangered;
  }
`;

export const BoxList = styled.ul`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
 
`;
export const ListMovie = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 250px;
  height: 300px;
  flex-direction: column;
`;

export const ImageActor = styled.img`
  display: block;
  width: 180px;
  height: 180px;
 
`;