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
import CartPage from '../pages/CartPage/CartPage';
import Support from '../pages/Support/Support';
import ContactPage from '../pages/ContactPage/ContactPage';
import WhySEOIdeaPlanetService from '../pages/WhyWeAre/WhyWeAre';
import Contact from '../pages/contact/Contact';
import RefundPolicy from '../pages/RefundPage/RefundPolicy';
import AdminLayout from '../layouts/AdminLayout';
import AdminHome from '../pages/admin/AdminHome/AdminHome';
import CreateAdmin from '../pages/admin/CreateAdmin/CreateAdmin';
import AllUsers from '../pages/admin/AllUsers/AllUsers';
import CreateProducts from '../pages/admin/CreateProducts/CreateProducts';
import UpdateServices from '../pages/admin/updateServices/UpdateServices';
import UpdateForm from '../pages/admin/UpdateForm/UpdateForm';

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
        path: '/payment/:price/:ids',
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
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/support',
        element: <Support />,
      },
      {
        path: '/contact-us',
        element: <ContactPage />,
      },
      {
        path: '/why-we-are',
        element: <WhySEOIdeaPlanetService />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/refund',
        element: <RefundPolicy />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: '/admin/dashboard',
        element: <AdminHome />,
      },
      {
        path: '/admin/create-user',
        element: <CreateAdmin />,
      },
      {
        path: '/admin/All-user',
        element: <AllUsers />,
      },
      {
        path: '/admin/Add-services',
        element: <CreateProducts />,
      },
      {
        path: '/admin/updateServices',
        element: <UpdateServices />,
      },
      {
        path: '/admin/updateServices/:id',
        element: <UpdateForm />,
        loader: ({ params }) =>
          fetch(
            `https://techtuend-service-server.vercel.app/api/services/${params.id}`
          ),
      },
    ],
  },
]);

export default route;
