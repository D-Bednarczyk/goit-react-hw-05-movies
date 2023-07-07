import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovie } from 'service/fetchMovie';
import css from './MovieDetailPage.module.css';

const MovieDetailPage = () => {
  const [filmDetail, setFilmDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  //dorobic loading

  useEffect(() => {
    const fetchMovieDetail = () => {
      setLoading(true);

      fetchMovie(movieId)
        .then(fetchMovie => {
          setFilmDetail(fetchMovie.data);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchMovieDetail();
  }, []);

  console.log(filmDetail);

  return (
    <div>
      <Link to="/">Back</Link>
      <img
        className={css.poster}
        alt="poster"
        src={'https://image.tmdb.org/t/p/original' + filmDetail.poster_path}
      ></img>
    </div>
  );
};

export default MovieDetailPage;
