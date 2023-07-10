import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home.jsx';
import { Movies } from '../pages/Movies/Movies.jsx';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails.jsx';
import { SharedLayout } from './SharedLayout/SharedLayout.jsx';
//import { Cast } from './Cast/Cast.jsx';
import { useEffect, useState } from 'react';
import { api } from '../services/api.js';
import axios from 'axios';

export const App = () => {
  const [data, setData] = useState([]);

  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

  useEffect(() => {
    const API_KEY = 'ac3e035161883f7175e5be9954a0068d';
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    axios
      .get(`trending/movie/day?api_key=${API_KEY}`)
      .then(response => {
        setData(response.data.results);
        //const movies = response.data.results;

        //console.log(movies.map(movie => movie.title));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  //   function MoviesList (movies){

  //     const items = movies.titles;
  //     const listItems= items.map((item)=>
  //     <li key={item.id}>{item.title}</li>)
  // return <ul>{listItems}</ul>

  //   }
  //  const Cast = ({ movies, index }) => {
  //   return (
  //     <ul>{movies.map(movie=> <li key={index}>{movie.title}</li>)
  //     }
  //     </ul>
  //   );
  // };

  // const getTitles = (movies) => {
  //   const movieList = movies.map(movie => <li>{movie.title}</li>);
  //   const list = <ul>{movieList}</ul>;
  //   return list;
  // };

  return (
    <>
      <h2>Trending Films</h2>

      <ul>
        {data.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
          </li>
        ))}
      </ul>
      {/* <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/moviedetails" element={<MovieDetails />} />
        </Route>
      </Routes>  */}
    </>
  );
};
