import styled from "styled-components";
import {  Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  
`;

export const Layout = () => {
  return (
    <Conteiner>
      <header>
        <BoxLink>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </BoxLink>
      </header>
      <Suspense >
        <Outlet />
      </Suspense>
    </Conteiner>
  );
};

const BoxLink = styled.nav`
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 30px;
  
`;

const StyledNavLink = styled(Link)`
 
  text-decoration: none;
  color: black;
  
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;