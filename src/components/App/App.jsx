import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import Movies from "../../Page/Movies/Movies";
import Home from "../../Page/Home/Home";
import { MovieDetails } from "Page/MovieDetails/MovieDetails";
import { Cast } from '../../components/Cast/Cast';
import { Reviews } from '../../components/Revie/Reviews';


export const App = () => {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="movies" element={<Movies/>} />
                    <Route path="movies/:movieId" element={<MovieDetails/>} />
                    <Route path="/movies/:movieId/reviews" element={<Reviews/>} />
                    <Route path="/movies/:movieId/cast" element={<Cast/>} />
                    
                </Route>
                
            </Routes>

        </div>


    );
};
