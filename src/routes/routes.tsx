import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Home from '../pages/Home/Home/Home';

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/service',
        element: <Services />,
      },
    ],
  },
]);

export default route;
