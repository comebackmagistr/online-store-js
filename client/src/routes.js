import Login from './pages/Auth/Login';
import Registration from './pages/Auth/Registration';
import Mainpage from './pages/Mainpage';
import { LOGIN_ROUTE, MAINPAGE_ROUTE, REGISTRATION_ROUTE } from './utils/paths';

export const publicRoutes = [
  {
    path: MAINPAGE_ROUTE,
    Component: Mainpage,
  },
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Registration,
  },
];
