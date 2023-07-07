const MovieDetailGenresComp = ({ genres }) => {
  const genresList = genres.map(el => `${el.name} `);

  return <p>{genresList}</p>;
};

export default MovieDetailGenresComp;
