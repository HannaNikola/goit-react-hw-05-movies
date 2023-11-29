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
                setActors(actorDeteils);
                // console.log(data)
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
            <ul>
                {actors.map((item) => (
                    <li key={item.id}><img src={item.profile_path} alt="" />
                        <p>{item.name}</p>
                        <p>{item.character}</p>
                    </li>
                ))}
             </ul>
        </div>)
    
}

