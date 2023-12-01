import styled from "styled-components";
import {  Link } from "react-router-dom";


export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  
`;

export const BoxLink = styled.nav`
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 30px;
  
`;

export const StyledNavLink = styled(Link)`
 
  text-decoration: none;
  color: black;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

