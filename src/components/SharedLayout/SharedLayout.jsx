import { Outlet, NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
        <header>
            <nav>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to='/movies'>Movies</NavLink>
            </nav>
        </header>
      {/* Outlet should be used in parent route elements to render their child route elements*/}
      <Outlet />
      
      </div>
  )
}
