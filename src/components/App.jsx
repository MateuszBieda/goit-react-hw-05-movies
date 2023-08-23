import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
//import { Header, Link, Container } from './App.styled';
import { SharedLayout } from './SharedLayout/SharedLayout';
//import { Home } from 'pages/Home/Home.jsx';
import { Movies } from '../pages/Movies/Movies.jsx';
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails.jsx';
// import { SharedLayout } from './SharedLayout/SharedLayout.jsx';
//import { Cast } from './Cast/Cast.jsx';
const Home = lazy(() => import('pages/Home/Home.jsx'));
//const Movies = lazy(() => import('pages/Movies/Movies.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element ={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path ="movies" element={<Movies/>}/>

      </Route>
    </Routes>
  );
};
