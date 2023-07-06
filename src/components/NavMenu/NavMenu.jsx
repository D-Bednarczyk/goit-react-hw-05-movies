import { NavLink } from 'react-router-dom';

import css from './NavMenu.module.css';

const NavMenu = () => {
  return (
    <nav>
      <NavLink className={css.anchor} to="/">
        Home
      </NavLink>
      <NavLink className={css.anchor} to="/movies">
        Search
      </NavLink>
    </nav>
  );
};

export default NavMenu;
