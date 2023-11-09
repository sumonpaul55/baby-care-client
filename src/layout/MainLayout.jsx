import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../componets/navbar/Navbar';
import Footer from '../shared/Footer';
import ScrollToTop from '../shared/ScrollToTop';
import Gotop from '../shared/Gotop';

const MainLayout = () => {
    return (
        <>
            <ScrollToTop />
            <Gotop></Gotop>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;