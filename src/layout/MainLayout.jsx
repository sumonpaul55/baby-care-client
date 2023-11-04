import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../componets/navbar/Navbar';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default MainLayout;