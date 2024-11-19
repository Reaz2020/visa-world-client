import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Form from '../components/Form';
import Register from '../components/Register';
import Profile from '../components/Profile';
import PrivateRoute from '../components/PrivateRoute';
import History from '../components/History';
import StartLearning from '../components/StartLearning';
import Tutorial from '../components/Tutorials';
import Home from '../components/Home';
import Lesson from '../components/Lesson';
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
        path: 'start-learning',
        element: <StartLearning />,
      },
      {
        path: 'tutorial',
        element: <PrivateRoute><Tutorial /></PrivateRoute>,
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
        path: 'history',
        element: <PrivateRoute><History /></PrivateRoute>,
      },
      {
        path: 'lessons/:lesson_no',
        element: <PrivateRoute><Lesson /></PrivateRoute>,
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


///forgot-password