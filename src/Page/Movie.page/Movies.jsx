
import { useEffect, useState } from 'react';
import { MovieDetails } from '../Movie.details.page/MovieDetails';
import { Cast } from '../../components/Cast/Cast';
import { Reviews } from '../../components/Revie/Reviews';
import { FilterMovie } from '../../components/SearchingMovie/FilterMovie';
import { fetchMovie } from '../../components/Api';

export default function Movies() {

    const [searchResults, setSearchResults] = useState([]);


    

    const handleSubmit = async searchItem => {
        setSearchResults(searchItem);
    };
    useEffect(() => {
        if (searchResults === '') {
            return;
        }
        const searchMovie = async () => {
            try {
                const response = await fetchMovie(searchResults);
                setSearchResults(response);
                console.log(response)
            } catch (error) {
                console.log('Something went wrong:', error);
            }
        }
        searchMovie();
    }, [searchResults])



    return (
        <div>
            <FilterMovie onSubmit={handleSubmit} />
            <MovieDetails />
            <Cast />
            <Reviews />
        </div>
    )
}