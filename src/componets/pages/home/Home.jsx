import React from 'react';
import Slider from './Slider';
import { Helmet } from 'react-helmet-async';
import ReactPlayer from 'react-player'
import img from "../../../assets/thumbnail.jpg"
import "./home.css"
import { Link } from 'react-router-dom';
const Home = () => {

    return (
        <>
            <Helmet>
                <title>Littlestarscare || home</title>
            </Helmet>
            <main className='bg-slate-50'>
                <div className='sm:p-2 md:p-5'><Slider></Slider></div>
                <section className="py-20 bg-white">
                    <div className="container mx-auto">
                        <h2 className='text-xl font-semibold md:text-3xl lg:text-4xl'>Available Services</h2>
                        <div className='py-10'>
                            {/* all service goes here */}
                            <div>

                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <Link to='/all-service' className='text-primary font-bold md:text-xl text-center inline-block border border-transparent duration-200 rounded-md mx-auto hover:border-primary px-3 py-2'>View All Service</Link>
                        </div>
                    </div>
                </section>
                <section className='py-32 our-mission'>
                    <div className="container mx-auto px-1">
                        <div className='flex flex-col lg:flex-row gap-5 md:gap-16'>
                            <div className='lg:w-5/12 clear-left space-y-8'>
                                <h2 className='text-xl md:text-2xl lg:text-4xl font-semibold'>Our mission</h2>
                                <p className='text-slate-600 md:text-lg text-justify tracking-tight'>Our mission at Littlestascare is to provide a nurturing haven where every childs potential is celebrated, and their natural curiosity is cultivated. Were committed to creating a safe, loving environment that fosters growth, learning, and positive development in our little stars. With a dedicated team and a passion for education, were here to ignite the spark in each child, guiding them on a path to a bright future filled with endless possibilities.</p>
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