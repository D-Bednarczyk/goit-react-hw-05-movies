import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchCrew } from 'service/fetchCrew';
import css from './MovieDetailCastPage.module.css';
import MovieCrewComp from 'components/MovieCrewComp/MovieCrewComp';
const MovieDetailCastPage = () => {
  const [crew, setCrew] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const fdata = await fetchCrew(movieId);
        setCrew(fdata.data.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [movieId]);

  console.log(crew);

  if (loading) return <div>Loading</div>;

  return <MovieCrewComp cast={crew} />;
};

export default MovieDetailCastPage;
