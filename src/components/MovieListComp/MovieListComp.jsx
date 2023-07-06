import { Link } from 'react-router-dom';

const MovieListComp = ({ films }) => {
  return (
    <ul>
      {films.map(el => (
        <li key={el.id}>
          <Link to={`/movies/${el.id}`}>{el.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieListComp;
