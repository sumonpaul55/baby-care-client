import React from 'react';
import Slider from './Slider';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Littlestarscare || home</title>
            </Helmet>
            <main className='bg-slate-200'>
                <Slider></Slider>
            </main>
        </>
    );
};

export default Home;