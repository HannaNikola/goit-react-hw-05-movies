
import {  useState } from 'react';

export const FilterMovie = ({ onSubmit }) => {
    const [searchResults, setSearchResults] = useState('');


    
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(searchResults);
        console.log(searchResults);
    }

    const handleChange =(event) => {
        
        setSearchResults(event.target.value.toLowerCase());
        // console.log(event.target.value)
    }

   return (
        <div>
            <h1>Find movie</h1>
            <form onSubmit={handleSubmit}>
                {/* <label > </label> */}
                <input
                    type="text"
                    id="filter"
                   value={searchResults}
                    onChange={handleChange}

                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}