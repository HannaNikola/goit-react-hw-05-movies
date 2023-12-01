import { useEffect, useState} from "react";
import { fetchList } from '../../components/Api';
import { LinkStyle } from './Home.styled';




export default function Home() {

    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const searchMovieList = async () => {
            try {
                const movies = await fetchList();
                // console.log('Movies:', movies);
                setTrendingMovies(movies);

            } catch (error) {
                console.error('something wrong', error);
            }
        }
        searchMovieList();
    }, [])



    return (
        <div>
            <h1>Trending Today </h1>
            <ul>
                {trendingMovies.map((movie) => (

                    <li key={movie.id}><LinkStyle to={`/movies/${movie.id}`}>{movie.title}</LinkStyle></li>
                ))}
            </ul>

        </div>
    )
}