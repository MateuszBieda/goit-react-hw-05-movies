import { useEffect,useState, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMoviesDetailsById } from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { BackLink, AddInfo, Container } from './MovieDetailes.styled';








const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchMoviesDetailsById(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  const backLink = location.state?.from ?? '/';

  return (
    <>
      <BackLink to={backLink}>← Go back</BackLink>
      <MovieCard movie={movieDetails} />
      <Container>
        <AddInfo to={'cast'} state={{ from: backLink }}>
          Cast
        </AddInfo>
        <AddInfo to={'reviews'} state={{ from: backLink }}>
          Reviews
        </AddInfo>
      </Container>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
