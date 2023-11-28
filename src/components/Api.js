import axios from 'axios';

const api_key = 'a2883c737e33341efae828fe3a93a67d';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  api_key: api_key,
  
 
};

export const fetchList = async () => {
  const response = await axios.get('/trending/movie/day');
    return response.data.results;
   
};


    
export const fetchMovie = async (searchResults) => {
  const response = await axios.get(`/search/movie?query=${searchResults}`);
  return response.data.results;

  
  
};


export const fetchMovieDeteils = async (movieId )=> {
  const response = await axios.get(
    `/movie/${movieId}&append_to_response=images`
  );
  return response.data;
  
  
};


// https://api.themoviedb.org/3/movie/157336?api_key=a2883c737e33341efae828fe3a93a67d&append_to_response=videos,images