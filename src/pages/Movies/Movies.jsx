

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MoviesList } from 'components/MovieList/MovieList';
import { fetchMoviesByKeywords } from 'services/api';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie= searchParams.get('query')??'';

  useEffect(() => {
    
    fetchMoviesByKeywords(searchMovie).then(setMovies);
  }, [searchMovie]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <SearchBox onSubmit={handleSubmit} onChange={handleChange} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
