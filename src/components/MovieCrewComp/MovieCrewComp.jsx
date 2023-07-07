import css from './MovieCrewComp.module.css';

const MovieCrewComp = ({ cast }) => {
  return (
    <ul>
      {cast.map(el => (
        <li key={cast.id}>
          <img
            className={css.profilepic}
            alt="pic"
            src={'https://image.tmdb.org/t/p/original' + el.profile_path}
          ></img>
          {el.name} as {el.character}
        </li>
      ))}
    </ul>
  );
};
export default MovieCrewComp;
