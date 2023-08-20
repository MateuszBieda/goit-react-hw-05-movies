import { SearchBox } from 'components/SearchBox';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByKeywords } from 'services/api';
import { MoviesList } from 'components/MovieList.jsx';  

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }
    fetchMoviesByKeywords(query).then(setMovies);
  }, [searchParams]);

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
      <MoviesList movies={movies} />
    </>
  );
};

// import React, { useState, useEffect } from 'react';
// import { fetchMoviesByKeywords } from 'services/api';
// // import { useSearchParams } from "react-router-dom";

// export const Movies = props => {
//   const [searchMovie, setSearchMovie] = useState('');
//   const [content, setContent] = useState([]);
// const [loading, setLoading] = useState(true);
// const [errorMessage, setErrorMessage] = useState(null);
// const [searchParams, setSearchParams] = useSearchParams();
// const keyword = searchParams.get("keyword");

// useEffect(() => {
//   const searchMovies = () => {
//     fetchMoviesByKeywords()
//       .then(content => {
//         setContent(content);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
//   searchMovies();
// }, [searchMovie]);

// ===============================================
// useEffect(() => {
//   fetchMoviesByKeywords();
// }, [searchMovie]);

// const Search = e => {
//   fetchMoviesByKeywords();
// };

// const SearchingValue = e => {
//   setSearchMovie(e.target.value);
//   console.log(e.target.value);
// };
// const handleSearchInputValue = e => {
//   setSearchMovie(e.target.value);
// };

// const resetInputValue = () => {
//   setSearchMovie('');
// };

// const callSearchFunction = e => {
//   e.preventDefault();
//   props.search(searchMovie);
//   resetInputValue();
// };
// ==========================================================
// return (
//   <form>
//     <input value={searchMovie} onChange={searchMovies} type="text" />

//     <input onClick={content} type="submit" value="SEARCH" />
//   </form>
//   );
// };
