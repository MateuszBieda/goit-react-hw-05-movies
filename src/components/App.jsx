import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';


const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy (()=> import('../pages/Movies/Movies'));
const Cast = lazy(()=> import ('./Cast/Cast'));
const Reviews = lazy(()=> import ('./Reviews/Reviews'));
const MovieDetails =lazy(()=>import('../pages/MovieDetails/MovieDetails'))



export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
