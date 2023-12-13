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
import Lottie from 'lottie-react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import faq from "../../../assets/faq.json"
import { BiDownArrow } from "react-icons/bi"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
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
    // accordion related code 

    return (
        <>
            <Helmet>
                <title>Littlestarscare || home</title>
            </Helmet>
            {/* live chat */}
            <MessengerCustomerChat
                pageId="1744153689139754"
                appId="2139840976393717"
            />


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
                            {
                                !isLoading && services?.data.length > 5 ?
                                    <Link to='/all-service' className='text-primary font-bold md:text-xl text-center inline-block border border-transparent duration-200 rounded-md mx-auto hover:border-primary px-3 py-2'>Show All</Link>
                                    : null
                            }
                        </div>
                    </div>
                </section>
                <section className='py-32 our-mission'>
                    <div className="container mx-auto px-1">
                        <div className='flex flex-col lg:flex-row gap-5 md:gap-16'>
                            <div className='lg:w-5/12 clear-left space-y-8 overflow-hidden' data-aos="fade-right">
                                <h2 className='text-xl md:text-2xl lg:text-4xl font-semibold'>Our mission</h2>
                                <p className='text-slate-600 md:text-lg text-justify tracking-tight'>Our mission at Littlestascare is to provide a nurturing haven where every childs potential is celebrated, and their natural curiosity is cultivated. Were committed to creating a safe, loving environment that fosters growth, learning, and positive development in our little stars. With a dedicated team and a passion for education, were here to ignite the spark in each child, guiding them on a path to a bright future filled with endless possibilities.</p>
                            </div>
                            <div className='lg:w-7/12 overflow-hidden' data-aos="fade-left">
                                <ReactPlayer url='https://www.youtube.com/watch?v=PEWXRjgLdeM' width="100%" controls light={<img src={img} className='rounded-lg' alt='Thumbnail' />} />
                            </div>
                        </div>
                    </div>
                </section>
                {/* popular section */}
                <section className='py-32 bg-slate-300'>
                    <div className='container mx-auto'>
                        <h2 className='text-xl font-bold py-9 md:text-3xl'>Our Popular Services</h2>
                        <div className='grid grid-cols-1 m-2 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-8'>
                            {
                                ispopularLoading ? <Loading></Loading> :
                                    popularService?.data?.map((items, idx) => {
                                        return <Popular key={idx} popular={items}></Popular>
                                    })
                            }
                        </div>
                    </div>
                </section>
                <section className='py-10'>
                    <div className='container mx-auto'>
                        <h2 className='text-xl font-bold py-9 md:text-3xl'>Frequently Asked Questions</h2>
                        <div className='gap-5 grid grid-cols-1 md:grid-cols-2 items-center'>
                            <div className='max-w-[550px] overflow-hidden' data-aos="fade-right">
                                <Lottie animationData={faq} loop={true} />
                            </div>
                            <div className='m-2 overflow-hidden' data-aos="fade-left">
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<BiDownArrow />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography style={{ fontWeight: "600" }}>What is LittleStar Baby Care?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            LittleStar Baby Care is a trusted provider of childcare services for families. We offer a range of services designed to meet the unique needs of babies and children, including daycare, early childhood education, and babysitting services.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<BiDownArrow />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography style={{ fontWeight: "600" }}>How can I contact LittleStar Baby Care?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            You can reach us by phone at 01234567489, by email at dhaka, or visit our physical location at dhaka. We are also available through our contact form on our website.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<BiDownArrow />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography style={{ fontWeight: "600" }}>Do you have certified staff and caregivers?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Yes, we have a team of dedicated and qualified caregivers who are certified in early childhood education and are experienced in providing the best care for children.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<BiDownArrow />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography style={{ fontWeight: "600" }}>What are your operating hours?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Our operating hours may vary depending on the specific service and location. Generally, we offer full-day care during weekdays, and we also provide extended hours for parents with busy schedules. Please contact us for the specific hours of operation at the location of your choice.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<BiDownArrow />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography style={{ fontWeight: "600" }}>Is LittleStar Baby Care licensed and regulated?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Yes, we are fully licensed and regulated, complying with all state and local regulations to ensure the safety and well-being of the children in our care.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;