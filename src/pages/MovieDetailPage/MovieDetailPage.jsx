import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovie } from 'service/fetchMovie';
import MovieDetailGenresComp from 'components/MovieDetalGenresComp/MovieDetalGenresComp';
import css from './MovieDetailPage.module.css';

const MovieDetailPage = () => {
  const [filmDetail, setFilmDetail] = useState({});
  const [filmGenres, setfilmGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const fdata = await fetchMovie(movieId);
        setFilmDetail(fdata.data);
        setfilmGenres(fdata.data.genres);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [movieId]);

  if (loading) return <div>Loading</div>;

  return (
    <div>
      <div className={css.moviesDetails}>
        <div>
          <Link to="/">Back</Link>
          <img
            className={css.poster}
            alt="poster"
            src={'https://image.tmdb.org/t/p/original' + filmDetail.poster_path}
          ></img>
        </div>
        <div>
          <h3>{filmDetail.original_title}</h3>
          <p>User Score: {filmDetail.vote_average}%</p>
          <h4>Overview</h4>
          <p>{filmDetail.overview}</p>
          <h5>Genres</h5>
          <MovieDetailGenresComp genres={filmGenres} />
        </div>
      </div>
      <div className={css.extraInfo}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
//
export default MovieDetailPage;
