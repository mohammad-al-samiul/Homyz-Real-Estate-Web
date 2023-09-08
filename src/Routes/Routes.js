import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Menu from '../Pages/Menu/Menu';
import Order from '../Pages/Order/Order/Order';
import Signup from '../Pages/Signup/Signup';

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
      }
    ]
  }
]);
