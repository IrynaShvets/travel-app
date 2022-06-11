import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/preferences">Preferences</NavLink>
        </nav>
      </header>
      <Suspense fallback="Загрузка...">
        <Outlet />
      </Suspense>
    </>
  );
}
