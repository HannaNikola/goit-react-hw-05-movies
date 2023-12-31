import { useSearchParams} from  'react-router-dom' ;
import { ButonSubmit, FormSerach, TitelSearch } from './FormSearch.styled';




export const FormSearch = ({ onSubmit }) => {
    
        const [searchParams, setSearchParams] = useSearchParams();
        const value = searchParams.get('movie') || '';

        const handleChange = (event) => {
            setSearchParams({ movie: event.target.value.toLowerCase() });
            
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            onSubmit(searchParams);
            
            // setSearchParams({ movie: '' });
        };

    
    
    
    
        return (
            <div>
              
                <TitelSearch>Find movie</TitelSearch>
                <FormSerach onSubmit={handleSubmit}>
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


