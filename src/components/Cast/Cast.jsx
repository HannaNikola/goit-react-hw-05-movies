import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchActors } from "components/Api";

export const Cast = () => {

    const [actors, setActors] = useState(null);
    const params = useParams();
    console.log(params);

    useEffect(() => {
        async function getActorDeteils() {
            try {
                const actorDeteils = await fetchActors(params.movieId);
                setActors(actorDeteils);
            } catch (error) {
                console.log('something wrong', error);
            }
    
        }
        getActorDeteils()
    }, [params.movieId])


    return (
        <div>
            <Link>
                <h1>Cast</h1>
            </Link>
            {/* <p>{actors}</p> */}
        </div>
    )
}