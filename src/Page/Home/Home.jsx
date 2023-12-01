import { useEffect, useState} from "react";
import { fetchList } from '../../components/Api';
import { ListMovie } from "components/ListMovies/ListMovies";




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
            <ListMovie movies={trendingMovies} />
         </div>
    )
}