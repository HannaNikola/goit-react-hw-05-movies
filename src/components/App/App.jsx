import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { lazy } from "react";
import { MovieDetails } from "Page/MovieDetails/MovieDetails";
import { Cast } from '../../components/Cast/Cast';
import { Reviews } from '../Review/Reviews';



const Home = lazy(() => import('../../Page/Home/Home'));
const Movies = lazy(() => import('../../Page/Movies/Movies'));


export const App = () => {
    return (
        <div>
           
              <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="movies" element={<Movies/>} />
                    <Route path="movies/:movieId" element={<MovieDetails/>} >
                    <Route path="reviews" element={<Reviews/>} />
                    <Route path="cast" element={<Cast/>} />
                    </Route >
                </Route>
                
            </Routes>
           
        </div>


    );
};
