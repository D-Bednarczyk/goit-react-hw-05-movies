import { Routes, Route } from 'react-router-dom';
import { fetchTrending } from 'service/fetchTrending';
import NavMenu from './NavMenu/NavMenu';
import HomePage from 'pages/HomePage/HomePage';
import MovieDetailCastPage from 'pages/MovieDetailCastPage/MovieDetailCastPage';
import MoviesListPage from 'pages/MoviesListPage/MoviesListPage';
import MovieDetailPage from 'pages/MovieDetailPage/MovieDetailPage';
import MovieDetailReviewPage from 'pages/MovieDetailReviewPage/MovieDetailReviewPage';

export const App = () => {
  // console.log(fetchTrending());

  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesListPage />}>
          <Route path=":movieId" element={<MovieDetailPage />}>
            <Route path="cast" element={<MovieDetailCastPage />} />
            <Route path="reviews" element={<MovieDetailReviewPage />} />
          </Route>
        </Route>

        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};
