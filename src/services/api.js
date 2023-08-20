import axios from 'axios';

//https://api.themoviedb.org/3/trending/movie/day?api_key=###

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ac3e035161883f7175e5be9954a0068d';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  return response.data.results;
};

export const fetchMoviesByKeywords = async keyword => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
  );

  return response.data.results;
};

export const fetchMoviesDetailsById = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );

  return response.data;
};

export const fetchMoviesCastDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );

  return response.data.cast;
};

export const fetchMoviesReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );

  return response.data.results;
};
