import { fetchTrending } from 'service/fetchTrending';
import React, { useEffect, useState } from 'react';
import MovieListComp from 'components/MovieListComp/MovieListComp';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      fetchTrending()
        .then(fetchTrendingFilms => {
          setFilms(fetchTrendingFilms.data.results);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();
  }, []);

  if (loading) return <div>Loading</div>;

  return (
    <div>
      <h2>Trending today</h2>
      <MovieListComp films={films} />
    </div>
  );
};

export default HomePage;
