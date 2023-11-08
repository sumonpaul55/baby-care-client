import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Error from '../componets/Error';
import Home from '../componets/pages/home/Home';
import SignUp from '../componets/pages/SignUp';
import MainLayout from '../layout/MainLayout';
import Bookings from '../componets/pages/schedule/MySchedule';
import AllService from '../componets/pages/allService/AllService';
import Login from '../componets/pages/Login.jsx/Login';
import PrivetRoute from './PrivetRoute';
import Contact from '../componets/pages/Contact';
import AddService from '../componets/pages/addService/AddService';
import ServiceDetails from '../componets/pages/serviceDetail/ServiceDetails';
import MyService from '../componets/pages/myServices/MyService';
import UpdateMyService from '../componets/pages/myServices/UpdateMyService';
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
                path: "/my-schedule",
                element: <PrivetRoute><Bookings></Bookings></PrivetRoute>
            },
            {
                path: "/all-service",
                element: <AllService></AllService>
            }, {
                path: "/contact",
                element: <Contact></Contact>
            }, {
                path: "/add-service",
                element: <PrivetRoute><AddService></AddService></PrivetRoute>
            },
            {
                path: "/service-detail/:id",
                element: <PrivetRoute><ServiceDetails></ServiceDetails></PrivetRoute>
            },
            {
                path: "/my-service",
                element: <PrivetRoute><MyService></MyService></PrivetRoute>
            },
            {
                path: "/update-service/:id",
                loader: ({ params }) => fetch(`https://littlestarscare-server.vercel.app/${params.id}`),
                element: <UpdateMyService></UpdateMyService>
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