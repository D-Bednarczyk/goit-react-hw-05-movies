import PropTypes from 'prop-types';

const MovieDetailGenresComp = ({ genres }) => {
  const genresList = genres.map(el => el.name).join(', ');

  return <p>{genresList}</p>;
};

export default MovieDetailGenresComp;

MovieDetailGenresComp.propTypes = {
  cast: PropTypes.array.isRequired,
};
