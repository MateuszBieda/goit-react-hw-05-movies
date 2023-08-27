import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  // const location = useLocation();

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
            <MovieLink to={`${id}`} state={{ from: 'movies/' }}>
              <MovieName>{title}</MovieName>
            </MovieLink>
          </li>
        ))}
      </List>
    </>
  );
};
export default Movies;
// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { SearchBox } from 'components/SearchBox/SearchBox';
// import { MoviesList } from 'components/MovieList/MovieList';
// import { fetchMoviesByKeywords } from 'services/api';

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const [query, setQuery] = useState('');
//   const [searchParams, setSearchParams] = useSearchParams();
//   const searchMovie= searchParams.get('query')??'';

//   useEffect(() => {

//     fetchMoviesByKeywords(searchMovie).then(setMovies);
//   }, [searchMovie]);

//   const handleChange = e => {
//     setQuery(e.target.value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     setSearchParams(query !== '' ? { query } : {});
//   };

//   return (
//     <>
//       <SearchBox onSubmit={handleSubmit} onChange={handleChange} />
//       {movies.length > 0 && <MoviesList movies={movies} />}
//     </>
//   );
// };

// export default Movies;
