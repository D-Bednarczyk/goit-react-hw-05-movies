import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const NavMenu = lazy(() => import('./NavMenuComp/NavMenuComp'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MovieDetailCastPage = lazy(() =>
  import('pages/MovieDetailCastPage/MovieDetailCastPage')
);
const MoviesListPage = lazy(() =>
  import('pages/MoviesSearchPage/MoviesSearchPage')
);
const MovieDetailPage = lazy(() =>
  import('pages/MovieDetailPage/MovieDetailPage')
);
const MovieDetailReviewPage = lazy(() =>
  import('pages/MovieDetailReviewPage/MovieDetailReviewPage')
);

export const App = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<NavMenu />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesListPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailPage />}>
              <Route path="cast" element={<MovieDetailCastPage />} />
              <Route path="reviews" element={<MovieDetailReviewPage />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
