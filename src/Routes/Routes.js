import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layouts/DashboardLayout/DashboardLayout';
import Main from '../Layouts/Main/Main';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Menu from '../Pages/Menu/Menu';
import Order from '../Pages/Order/Order/Order';
import Secret from '../Pages/Secret/Secret';
import Signup from '../Pages/Signup/Signup';
import PrivateRoutes from './PrivateRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      // {
      //   path: '/order',
      //   element: <Order />
      // },
      {
        path: '/order/:category',
        element: <Order />
      },
      // {
      //   path: '/about',
      //   element: <About />
      // },
      {
        path: '/contact-us',
        element: <Contact />
      },
      {
        path: '/secret',
        element: (
          <PrivateRoutes>
            <Secret />
          </PrivateRoutes>
        )
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      // {
      //   path: '/',
      //   element: <DashboardLayout />
      // }
    ]
  }
]);
