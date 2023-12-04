import { useLocation } from "react-router-dom";

import { LinkStyle } from "./ListMovies.styled";

export const ListMovie = ({ movies }) => {
    const location = useLocation();
    console.log(location);
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}><LinkStyle to={`/movies/${movie.id}`} state={{from: location}}  >{movie.title}</LinkStyle></li>
            ))}
        </ul>
    )

}