import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchActors } from "components/Api";
import { useLocation } from "react-router-dom";
import { Title, LinkBack, ListMovie, BoxList, ImageActor } from "./Cast.styled";
import { GoArrowLeft } from "react-icons/go";


export const Cast = () => {

    const [actors, setActors] = useState([]);
    const params = useParams();
    // console.log(params);
 
    const location = useLocation();
    
    // console.log(location);

    useEffect(() => {
        async function getActorDeteils() {
            try {
                const actorDeteils = await fetchActors(params.movieId);
                setActors(actorDeteils.cast);
                // console.log(actorDeteils)
            } catch (error) {
                console.log('something wrong', error);
            }
    
        }
        getActorDeteils()
    }, [params.movieId])


    return (
    
        <div>
            <LinkBack to={`/movies/${params.movieId}` ?? "/movies/"} state={{ from: location }}><GoArrowLeft />Back to .. </LinkBack>
            <Title>Cast</Title>
            
            {actors && (<BoxList>
                {actors.map((actor) => (
                    <ListMovie key={actor.id}><ImageActor
                        src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` :
                           ' https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'}
                        width={250}
                        alt={actor.title}
                    /> 
                        <p>{actor.name}</p>
                        <p>{actor.character}</p>
                    </ListMovie>
                ))}
            </BoxList>)}
            
        </div>)
    
}

