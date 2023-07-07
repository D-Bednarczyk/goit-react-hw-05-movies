import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from './NavMenuComp.module.css';

const NavMenu = () => {
  return (
    <div>
      <nav>
        <NavLink className={css.anchor} to="/" end>
          Home
        </NavLink>
        <NavLink className={css.anchor} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default NavMenu;
