

import axios from 'axios';

//https://api.themoviedb.org/3/trending/movie/day?api_key=###

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchImages = async (page=1) => {
    const API_KEY = 'ac3e035161883f7175e5be9954a0068d';
  const response = axios.get(
    `trending/movie/day?api_key=${API_KEY}&page=${page}`
  );

  const elements = (await response).data.hits.map(element => {
    const { title } = element;
    return { title };
  });
  return console.log(elements);
};

// const options = { method: 'GET', headers: { accept: 'application/json' } };

// fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
