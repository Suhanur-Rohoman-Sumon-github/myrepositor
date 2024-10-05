import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Home from '../pages/Home/Home/Home';
import CaseStudies from '../pages/CaseStudies/CaseStudies';
import Blog from '../pages/Blog/Blog';

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
        path: '/services',
        element: <Services />,
      },
      {
        path: '/case-studies',
        element: <CaseStudies />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
]);

export default route;
