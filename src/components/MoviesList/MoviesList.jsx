import { useLocation } from 'react-router-dom';
import { List, MovieLink, MovieName } from './MoviesList.styled';
import PropTypes from 'prop-types';

 const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <MovieLink to={`movies/${id}`} state={{ from: location }}>
            <MovieName>{title}</MovieName>
          </MovieLink>
        </li>
      ))}
    </List>
  );
};
export default MoviesList;

PropTypes.MoviesList = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};