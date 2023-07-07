import { NavLink } from 'react-router-dom';

import css from './NavMenuComp.module.css';

const NavMenu = () => {
  return (
    <nav>
      <NavLink className={css.anchor} to="/" end>
        Home
      </NavLink>
      <NavLink className={css.anchor} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default NavMenu;
