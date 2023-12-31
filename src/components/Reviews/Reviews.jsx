import { fetchMoviesReviews } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, Author, Text } from './Reviews.styled';
import PropTypes from 'prop-types';

 const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <List>

      {reviews.map(({ id, content, author }) => (
        <li key={id}>
          <Author>{author}</Author>
          <Text>{content}</Text>
        </li>
      ))}
    </List>
  );
};

export default Reviews;


Reviews.propTypes = {
  id: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
  fetchMoviesReviews: PropTypes.func.isRequired,
}.isRequired;