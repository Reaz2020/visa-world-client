import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Form from '../components/Form';
import Register from '../components/Register';
import Profile from '../components/Profile';
import PrivateRoute from '../components/PrivateRoute';
import MyAddedVisas from '../components/MyAddedVisas';
import MyVisaApplications from '../components/MyVisaApplications';
import AllVisas from '../components/AllVisas';
import AddVisa from '../components/AddVisa';
import Home from '../components/Home';

import NotFound from '../components/NotFound'; 
import ForgetPassword from '../components/ForgetPassword';
import UpdateProfile from './UpdateProfile';
import AboutUs from '../components/components-for-home/AboutUs';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />, // Home page
      },
      {
        path: 'home',
        element: <PrivateRoute><Home /></PrivateRoute>,
      },
      {
        path: 'all-visas',
        element: <AllVisas/>,
      },
      {
        path: 'add-visa',
        element: <PrivateRoute><AddVisa /></PrivateRoute>,
      },
      {
        path: 'login',
        element: <Form />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
      {
        path: 'my-added-visas',
        element: <PrivateRoute><MyAddedVisas /></PrivateRoute>,
      },
      {
        path: 'my-visa-applications',
        element: <PrivateRoute><MyVisaApplications/></PrivateRoute>,
      },
   
      {
        path: '/forgot-password',
        element: <ForgetPassword/>,
      },

      {
        path: '/update-profile',  
        element: <UpdateProfile /> ,
      },

      {
        path: '/about-us',  
        element: <AboutUs /> ,
      },
    
      {
        path: '*',
        element: <NotFound />, // NotFound component on invalid route
      },
    ],
  },
]);

export default Routes;


