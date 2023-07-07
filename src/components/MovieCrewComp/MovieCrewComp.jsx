import css from './MovieCrewComp.module.css';

const MovieCrewComp = ({ cast }) => {
  return (
    <ul>
      {cast.map(el => (
        <li>
          <img
            className={css.profilepic}
            src={'https://image.tmdb.org/t/p/original' + el.profile_path}
          ></img>
          {el.name} as {el.character}
        </li>
      ))}
    </ul>
  );
};
export default MovieCrewComp;