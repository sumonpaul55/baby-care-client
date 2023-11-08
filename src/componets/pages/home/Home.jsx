/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Slider from './Slider';
import { Helmet } from 'react-helmet-async';
import ReactPlayer from 'react-player'
import img from "../../../assets/thumbnail.jpg"
import "./home.css"
import { Link } from 'react-router-dom';
import useAxios from '../../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../shared/Loading';
import SingleService from '../allService/SingleService';
import Popular from './Popular';
const Home = () => {
    const useAxiosSecure = useAxios();
    const { data: services, isError, error, isLoading } = useQuery({
        queryKey: ["services"],
        queryFn: () => {
            return useAxiosSecure.get("/service6")
        }
    })
    // console.log(services, isError, isLoading, error)
    const { data: popularService, isLoading: ispopularLoading } = useQuery({
        queryKey: ["popularService"],
        queryFn: () => {
            return useAxiosSecure.get('/popular-service')
        }
    })
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
                            {
                                isLoading ? <Loading></Loading> : isError ? <p>{error}</p> :
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20'>
                                        {
                                            services.data.map((service, idx) => (
                                                <SingleService key={idx} service={service}></SingleService>))
                                        }
                                    </div>
                            }
                        </div>
                        <div className="text-center mt-5">
                            <Link to='/all-service' className='text-primary font-bold md:text-xl text-center inline-block border border-transparent duration-200 rounded-md mx-auto hover:border-primary px-3 py-2'>Show All</Link>
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
                {/* popular section */}
                <section className='py-20 bg-slate-300'>
                    <div className='container mx-auto'>
                        <h2 className='text-xl font-bold py-9 md:text-3xl'>Our Popular Services</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-16'>
                            {
                                ispopularLoading ? <Loading></Loading> :
                                    popularService?.data?.map((items, idx) => {
                                        return <Popular key={idx} popular={items}></Popular>
                                    })
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;