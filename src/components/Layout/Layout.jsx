
import {  Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Conteiner, BoxLink, StyledNavLink } from "./Layout.styled";

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