import { Routes, Route } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { NotFound } from 'pages/NotFound/NotFound';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
