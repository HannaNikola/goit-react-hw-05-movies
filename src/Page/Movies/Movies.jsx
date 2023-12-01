
import { useEffect, useState } from 'react';
import { FormSearch } from '../../components/SearchingMovie/FormSearch';
import { fetchMovie } from '../../components/Api';
import { ListMovie } from 'components/ListMovies/ListMovies';





export default function Movies() {

    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery ] = useState('');


    

    const handleSubmit = async searchItem => {
        setQuery(searchItem);
    };

    useEffect(() => {
        if (!query) {
            return;
        }
        const searchMovie = async () => {
            try {
                const response = await fetchMovie(query);
                setSearchResults(response);
                // console.log(response)
            } catch (error) {
                console.log('Something went wrong:', error);
            }
        }
        searchMovie();
    }, [query])



    return (
        <div>
            
            <FormSearch onSubmit={handleSubmit} />
            <div>
                <ListMovie movies={searchResults} />
            
            </div>
        </div>
    )
}