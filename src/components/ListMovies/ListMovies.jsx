import { LinkStyle } from "./ListMovies.styled";

export const ListMovie = ({ movies }) => {
    return(
    <ul>
        {movies.map((movie) => (
            <li key={movie.id}><LinkStyle to={`/movies/${movie.id}`}>{movie.title}</LinkStyle></li>
        ))}
    </ul>
    )

}