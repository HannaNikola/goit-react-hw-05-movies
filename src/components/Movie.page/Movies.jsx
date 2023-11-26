
import { useEffect , useState } from 'react';
import { MovieDetails } from './MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { FilterMovie } from './FilterMovie';
import { fetchMovie } from '../Api';

export default function Movies() {

    const [searchResults, setSearchResults] = useState('');


    // const handleSubmit = async(searcItem) => {
    //     setSearchResults([]);
    //     try {
    //         const response = await fetchMovie(searcItem);
    //                 setSearchResults(response);
    //                 console.log(response)
    //             } catch (error) {
    //                 console.log('Something went wrong:', error);
    //            }

    // };


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
            <Reviews/>
        </div>
    )
}