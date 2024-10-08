import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Home from '../pages/Home/Home/Home';
import CaseStudies from '../pages/CaseStudies/CaseStudies';
import Blog from '../pages/Blog/Blog';
import ServiceDetailsPage from '../pages/ServiceDetailsPage/ServiceDetailsPage';
import CheckOutPage from '../pages/CheckoutPage/CheckOutPage';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from '../pages/Terms&Condition/TermsAndCondition';

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
        path: '/service/:id',
        element: <ServiceDetailsPage />,
        loader: ({ params }) =>
          fetch(
            `https://techtuend-service-server.vercel.app/api/services/${params.id}`
          ),
      },
      {
        path: '/case-studies',
        element: <CaseStudies />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/payment/:price',
        element: <CheckOutPage />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/terms-condition',
        element: <TermsAndConditions />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
]);

export default route;
