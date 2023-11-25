import { MovieDetails } from './MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export default function Movies() {
    return (
        <div>
            <MovieDetails />
            <Cast />
            <Reviews/>
        </div>
    )
}