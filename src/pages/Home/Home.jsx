import { fetchTrendingMovies } from 'services/api';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
