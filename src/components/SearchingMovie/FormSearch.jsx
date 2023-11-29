
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButonSubmit, FormSerach, TitelSearch } from './FormSearch.styled';

export const FormSearch = ({ onSubmit }) => {
    const [searchResults, setSearchResults] = useState([]);


    
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(searchResults);
        // console.log(searchResults);
    }

    const handleChange =(event) => {
        
        setSearchResults(event.target.value.toLowerCase());
        // console.log(event.target.value)
    }

   return (
       <div>
           <Link to="/">Back to .. </Link>
           <TitelSearch>Find movie</TitelSearch>
           <FormSerach onSubmit={handleSubmit}>
                {/* <label > </label> */}
                <input
                    type="text"
                    id="filter"
                   value={searchResults}
                    onChange={handleChange}

                />
               <ButonSubmit type="submit">Search</ButonSubmit>
           </FormSerach>
           </div>
       
    )
}