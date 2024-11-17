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

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',// This will set this route as the default for the root path '/'
                element: <Home />, // You can also add a Home component if you have one
            },
            {
                path: 'home',
                element: <PrivateRoute><Home /></PrivateRoute>,
            },
            {
                path: 'start-learning',
                element: <StartLearning></StartLearning>,
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
        ],
    },
]);

export default Routes;
