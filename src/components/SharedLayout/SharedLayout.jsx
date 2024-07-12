import { Outlet } from 'react-router-dom';
import {Header} from '../Header';

export const SharedLayout = () => {
  return (
    <div>
        <Header />
      {/* Outlet should be used in parent route elements to render their child route elements*/}
      <Outlet />
      </div>
  )
}
