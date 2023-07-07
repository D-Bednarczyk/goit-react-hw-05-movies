import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from 'service/fetchReview';
import MovieReviewsComp from 'components/MovieReviewsComp/MovieReviewsComp';
import css from './MovieDetailReviewPage.module.css';

const MovieDetailReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const fdata = await fetchReview(movieId);
        setReviews(fdata.data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [movieId]);

  console.log(reviews);

  if (loading) return <div>Loading</div>;

  return <MovieReviewsComp reviews={reviews} />;
};

export default MovieDetailReviewPage;
