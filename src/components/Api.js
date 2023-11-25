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


    



