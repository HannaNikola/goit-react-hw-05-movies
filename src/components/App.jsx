import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
// import Home from "path/to/pages/Home";
// import Movies from "path/to/pages/Movies";
// import MovieDetails from "path/to/pages/MovieDetails";
// import Cast from "path/to/pages/Cast";
// import Reviews from "path/to/pages/Reviews";

import  Movies from "./Movie.page/Movies";
import Home from "./Home.page/Home";
import NotFound from "./NotFound.page/NotFound";





export const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
          {/* <MovieDetails /> */}
        </Route>
      <Route path="*" element={<NotFound />} />
        </Routes>
      
    </div>
    
    
  );
};
      