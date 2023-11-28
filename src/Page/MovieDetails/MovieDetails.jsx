import { useParams } from 'react-router-dom';
// import { useState } from "react";
import { Cast } from '../../components/Cast/Cast';
import { Reviews } from '../../components/Revie/Reviews';
import { useEffect, useState } from 'react';

import { fetchMovieDeteils } from 'components/Api';

export const MovieDetails = () => {
    const [deteils, setDeteils] = useState(null);

    const params = useParams();
    // console.log(params);

    useEffect(() => {
        async function getDeteilMovie() {
            try {
                const movieDateils = await fetchMovieDeteils(params.movieId);
                setDeteils(movieDateils);
                // console.log(deteils)
            } catch (error) {
                console.log('something wrong', error);
            }
        }
        getDeteilMovie();
    }, [params.movieId]);

    return (
        <div>
            

            {deteils && (
                <div>
                    <img src={deteils.poster_path} alt="" />
                    <h1>{deteils.title}</h1>
                    <p></p>
                    <h2>Overviev</h2>
                    <p>{deteils.overview}</p>
                    <h3>Genres</h3>
                    <p>{deteils.genres && deteils.genres[0].name}</p>
                </div>
            )}

            <Cast />
            <Reviews />
        </div>
    );
};

//     const [deteils, setDeteils] = useState({});

//     useEffect(() => {
//         const deteilsMovie = async () => {
//             try {
//                 const movie = await fetchMovieDeteils(deteils);
//                 console.log(movie);
//                 console.log('Movies:', movie);
//                 setDeteils(movie);

//             } catch (error) {
//                 console.log('something wrong', error);
//             }
//         }
//         deteilsMovie();
// }, [])
