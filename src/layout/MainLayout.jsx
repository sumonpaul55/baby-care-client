import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../componets/navbar/Navbar';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;