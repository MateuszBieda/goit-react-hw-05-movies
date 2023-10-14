import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
// import MoviesList from 'components/MoviesList/MoviesList';
import { fetchMoviesByKeywords } from 'services/api';
import {
  List,
  MovieLink,
  MovieName,
} from 'components/MoviesList/MoviesList.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }

    fetchMoviesByKeywords(query).then(setSearchMovies);
  }, [searchParams]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
    setQuery('');
  };

  return (
    <>
      <SearchBox
        value={query}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {/* <MoviesList movies={searchMovies}/> */}
      <List>
        {searchMovies.map(({ id, title }) => (
          <li key={id}>
            <MovieLink to={`${id}`} state={{ from: location }}>
              <MovieName>{title}</MovieName>
            </MovieLink>
          </li>
        ))}
      </List>
    </>
  );
};
export default Movies;
