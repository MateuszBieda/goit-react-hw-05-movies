import React from 'react';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api.js';
import { Link } from 'react-router-dom';
export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTrending = () => {
      fetchTrendingMovies()
        .then(movies => {
          setData(movies);
        })
        .catch(error => {
          console.log(error);
        });
    };
    fetchTrending();
  }, []);

  return (
    <>
      <h2>Trending today</h2>

      <ul>
        {data.map(movie => (
          <li key={movie.id}>
            <Link to={movie.title}>
              <h3>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
