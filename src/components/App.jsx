import { Routes, Route } from 'react-router-dom';

import NavMenu from './NavMenuComp/NavMenuComp';
import HomePage from 'pages/HomePage/HomePage';
import MovieDetailCastPage from 'pages/MovieDetailCastPage/MovieDetailCastPage';
import MoviesListPage from 'pages/MoviesSearchPage/MoviesSearchPage';
import MovieDetailPage from 'pages/MovieDetailPage/MovieDetailPage';
import MovieDetailReviewPage from 'pages/MovieDetailReviewPage/MovieDetailReviewPage';

export const App = () => {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesListPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailPage />}>
          <Route path="cast" element={<MovieDetailCastPage />} />
          <Route path="reviews" element={<MovieDetailReviewPage />} />
        </Route>

        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};
