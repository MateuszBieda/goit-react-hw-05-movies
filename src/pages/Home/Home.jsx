export const Home = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (<li key={movie.id}>{movie.title}</li>))}
      console.log(movies);
    </ul>
  );
};
