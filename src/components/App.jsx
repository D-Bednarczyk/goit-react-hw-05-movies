import { fetchTrending } from 'service/fetchTrending';
import NavMenu from './NavMenu/NavMenu';

export const App = () => {
  console.log(fetchTrending());

  return (
    <div>
      <NavMenu />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" component={MoviesListPage} />
        <Route path="/movies/:movieId" component={MovieDetailPage} />
        <Route path="/movies/:movieId/cast" component={MovieDetailCastPage} />
        <Route
          path="/movies/:movieId/reviews"
          component={MovieDetailReviewPage}
        />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
};
