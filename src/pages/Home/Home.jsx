import { fetchTrendingMovies } from 'services/api';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setTrendingMovies);
  }, []);

  return (
    <>
      <MoviesList movies={trendingMovies} />
    </>
  );
};

export default Home;
