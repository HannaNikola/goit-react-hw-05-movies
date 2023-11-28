import { useEffect, useState} from "react";
import { fetchList } from '../../components/Api';
import { Link } from "react-router-dom";





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

                    <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>
                ))}
            </ul>

        </div>
    )
}