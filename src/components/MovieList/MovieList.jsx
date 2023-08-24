import { useLocation } from 'react-router-dom';
import { List, MovieLink, MovieName } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
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
