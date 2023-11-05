import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Error from '../componets/Error';
import Home from '../componets/pages/home/Home';
import SignUp from '../componets/pages/SignUp';
import MainLayout from '../layout/MainLayout';
import Bookings from '../componets/pages/bookings/Bookings';
import MySchedule from '../componets/pages/mySchedule/MySchedule';
import AllService from '../componets/pages/allService/AllService';
import Login from '../componets/pages/Login.jsx/Login';
import PrivetRoute from './PrivetRoute';
import Contact from '../componets/pages/Contact';
import AddService from '../componets/pages/addService/AddService';
const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/my-bookings",
                element: <PrivetRoute><Bookings></Bookings></PrivetRoute>
            },
            {
                path: "/my-schedule",
                element: <PrivetRoute><MySchedule></MySchedule></PrivetRoute>
            },
            {
                path: "/all-service",
                element: <AllService></AllService>
            }, {
                path: "/contact",
                element: <Contact></Contact>
            }, {
                path: "add-service",
                element: <PrivetRoute><AddService></AddService></PrivetRoute>
            }
        ],
    },
    {
        path: "/signup",
        element: <SignUp></SignUp>
    },
    {
        path: "/login",
        element: <Login></Login>
    }
])


export default routers;