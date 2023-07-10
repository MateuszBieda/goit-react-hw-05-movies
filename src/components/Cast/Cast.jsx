
export const Cast = ({ movies, index }) => {
    return (
      <ul>{movies.map(movie=> <li key={index}>{movie.title}</li>)
      }
      </ul>
    );
  };