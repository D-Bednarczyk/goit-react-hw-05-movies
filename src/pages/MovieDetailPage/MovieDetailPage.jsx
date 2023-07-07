import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovie } from 'service/fetchMovie';
import MovieDetailGenresComp from 'components/MovieDetalGenresComp/MovieDetalGenresComp';
import css from './MovieDetailPage.module.css';

const MovieDetailPage = () => {
  const [filmDetail, setFilmDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  //dorobic loading
  // console.log('test:', fetchMovie(504949));

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
  console.log(filmDetail.genres);
  // <p>{filmDetail.genres.map(el => el.name + ' ')}</p>
  return (
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
        <MovieDetailGenresComp genres={filmDetail.genres} />
      </div>
    </div>
  );
};

export default MovieDetailPage;
