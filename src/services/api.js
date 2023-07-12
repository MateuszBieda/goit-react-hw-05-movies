import axios from 'axios';

//https://api.themoviedb.org/3/trending/movie/day?api_key=###

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ac3e035161883f7175e5be9954a0068d';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  return response.data.results;
};
