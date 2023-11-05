import React from 'react';
import Slider from './Slider';
import { Helmet } from 'react-helmet-async';
import ReactPlayer from 'react-player'
import img from "../../../assets/thumbnail.jpg"
import "./home.css"
const Home = () => {
    return (
        <>
            <Helmet>
                <title>Littlestarscare || home</title>
            </Helmet>
            <main className='bg-slate-50'>
                <Slider></Slider>
                <section className='py-32 bg-white our-mission'>
                    <div className="container mx-auto px-1">
                        <div className='flex flex-col lg:flex-row gap-5 md:gap-16'>
                            <div className='lg:w-5/12 clear-left space-y-8'>
                                <h2 className='text-xl md:text-2xl lg:text-4xl font-semibold'>Our mission</h2>
                                <p className='text-slate-600 md:text-xl tracking-tight'>Our mission at Littlestascare is to provide a nurturing haven where every childs potential is celebrated, and their natural curiosity is cultivated. Were committed to creating a safe, loving environment that fosters growth, learning, and positive development in our little stars. With a dedicated team and a passion for education, were here to ignite the spark in each child, guiding them on a path to a bright future filled with endless possibilities.</p>
                                <p></p>
                            </div>
                            <div className='lg:w-7/12'>
                                <ReactPlayer url='https://www.youtube.com/watch?v=PEWXRjgLdeM' width="100%" controls light={<img src={img} className='rounded-lg' alt='Thumbnail' />} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;