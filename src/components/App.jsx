import { Routes, Route, Link } from 'react-router-dom';
import { lazy } from 'react';
import React from 'react';

//import { Home } from 'pages/Home/Home.jsx';
import { Movies } from '../pages/Movies/Movies.jsx';
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails.jsx';
// import { SharedLayout } from './SharedLayout/SharedLayout.jsx';
//import { Cast } from './Cast/Cast.jsx';
const Home = lazy(() => import('pages/Home/Home.jsx'));
//const Movies = lazy(() => import('pages/Movies/Movies.jsx'));

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
};
