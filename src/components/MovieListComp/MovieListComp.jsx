import { Link, useLocation } from 'react-router-dom';

const MovieListComp = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(el => (
        <li key={el.id}>
          <Link to={`/movies/${el.id}`} state={{ from: location }}>
            {el.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieListComp;
