import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './Header/Header';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import MoviesDetails from '../pages/MoviesDetails/MoviesDetails';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
