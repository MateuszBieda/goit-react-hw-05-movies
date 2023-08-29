import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCastDetails } from 'services/api';
import { List, Item, Img, Name, Character } from './Cast.styled';
import PropTypes from 'prop-types';

 const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    fetchMoviesCastDetails(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <List>
      

      {cast.map(({ id, profile_path, name, character }) => (
        <Item key={id}>
          <Img src={imgBaseUrl.concat(profile_path)} alt="" />
          <div>
            <Name>{name}</Name>
            <Character>{character}</Character>
          </div>
        </Item>
      ))}
    </List>
  );
};

export default Cast;


Cast.propTypes = {
  id: PropTypes.number.isRequired,
  cast: PropTypes.array.isRequired,
  fetchMoviesCastDetails: PropTypes.func.isRequired,
}.isRequired;