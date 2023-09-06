import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home/Home';
import Menu from '../Pages/Menu/Menu';

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
        path: '/about',
        element: <About />
      },
      {
        path: '/contact-us',
        element: <Contact />
      }
    ]
  }
]);
