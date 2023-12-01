import { useSearchParams, Link } from  'react-router-dom' ;
import { ButonSubmit, FormSerach, TitelSearch } from './FormSearch.styled';
import styled from "styled-components";

const LinkBack = styled(Link)`
color: black;
  text-decoration: none;
  font-weight: 400;
  text-transform: uppercase;

  &:hover {
    color: orangered;
  }
`

export const FormSearch = ({ onSubmit }) => {
    
        const [searchParams, setSearchParams] = useSearchParams();
        const value = searchParams.get('movie') || '';

        const handleChange = (event) => {
            setSearchParams({ movie: event.target.value.toLowerCase() });
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            onSubmit(searchParams);
            setSearchParams({ movie: '' });
        };

        return (
            <div>
                <LinkBack to="/">Back to Home </LinkBack>
                <TitelSearch>Find movie</TitelSearch>
                <FormSerach onSubmit={handleSubmit}>
                    {/* <label > </label> */}
                    <input
                        type="text"
                        id="filter"
                        value={value}
                        onChange={handleChange}

                    />
                    <ButonSubmit type="submit">Search</ButonSubmit>
                </FormSerach>
            </div>
       
        )
    }


