import { Routes, Route,Link  } from 'react-router-dom';
import { lazy } from 'react';
import React from 'react';

//import { Home } from '../pages/Home/Home.jsx';
// import { Movies } from '../pages/Movies/Movies.jsx';
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails.jsx';
// import { SharedLayout } from './SharedLayout/SharedLayout.jsx';
//import { Cast } from './Cast/Cast.jsx';
const Home = lazy(() => import('pages/Home/Home.jsx'));




export const App = () => {

  return (

    <>
<nav>
  <Link to="/" end>Home</Link>
  <Link to="/movies">Movies</Link>
</nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
