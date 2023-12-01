import { useParams, Outlet} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieDeteils } from 'components/Api';
import { GoArrowLeft } from "react-icons/go";
import { BoxDeteils, LinkBack, StyledLink } from './MovieDeteils.styled'


export const MovieDetails = () => {

    const [deteils, setDeteils] = useState(null);


    const params = useParams();
    // console.log(params);

    useEffect(() => {
        async function getDeteilMovie() {
            try {
                const movieDateils = await fetchMovieDeteils(params.movieId);
                setDeteils(movieDateils);
            } catch (error) {
                console.log('something wrong', error);
            }
        }
        getDeteilMovie();
    }, [params.movieId]);

    return (
        <>
        <BoxDeteils>
        {deteils && (
                <div>
                    <LinkBack to="/"><GoArrowLeft />Back to .. </LinkBack>
                    <img
                        src={deteils.poster_path ? `https://image.tmdb.org/t/p/w500/${deteils.poster_path}` :
                            'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=400x500'}
                        width={250}
                        alt={deteils.title}
                    />

                    <h1>{deteils.title}</h1>
                    <p></p>
                    <h2>Overviev</h2>
                    <p>{deteils.overview}</p>
                    <h3>Genres</h3>
                    <p>{deteils.genres && deteils.genres[0].name}</p>
                </div>
                
            )}
        
            <nav>
                <StyledLink to={`/movies/${params.movieId}/reviews`}>Reviews</StyledLink>
                <StyledLink to={`/movies/${params.movieId}/cast`}>Cast</StyledLink>
            </nav>
                <Outlet />
            </BoxDeteils>
          
        </>
    );
};






