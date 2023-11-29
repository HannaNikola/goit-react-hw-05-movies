import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchActors } from "components/Api";

export const Cast = () => {

    const [actors, setActors] = useState([]);
    const params = useParams();
    // console.log(params);

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
            <Link to="/">Back to .. </Link>
            <Link>
                <h1>Cast</h1>
            </Link>
            {actors && ( <ul>
                {actors.map((actor) => (
                    <li key={actor.id}><img
                        src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` :
                            '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'}
                        width={250}
                        alt={actor.title}
                    /> 
                        <p>{actor.name}</p>
                        <p>{actor.character}</p>
                    </li>
                ))}
             </ul>)}
        </div>)
    
}

