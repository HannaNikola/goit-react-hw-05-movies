import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";


export const Conteiner = styled.div`
display: flex;
flex-direction: column;
`;

export const Layout = () => {
  return (
    <Conteiner>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
          </header>
         <Outlet/>
    </Conteiner>
  );
};