import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './Header/Header';

const HomePage = lazy(() => import('../pages/Home/Home'));
const MoviesPage = lazy(() => import('../pages/Movies/Movies'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MoviesDetails/MoviesDetails')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>

      <ToastContainer />
    </>
  );
};
