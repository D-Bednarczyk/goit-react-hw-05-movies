import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const { movieId } = useParams();

  return <div>Now showing product with id - {movieId}</div>;
};

export default MovieDetailPage;
