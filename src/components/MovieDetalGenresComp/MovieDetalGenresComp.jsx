const MovieDetailGenresComp = ({ genres }) => {
  const genresList = genres.map(el => el.name).join(', ');

  return <p>{genresList}</p>;
};

export default MovieDetailGenresComp;
