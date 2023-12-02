import React from 'react';
import { Link } from 'react-router-dom';

const IndividualService = ({ allService }) => {
    const { serviceArea, serviceImg, serviceName, serviceDescription, price, name, providerImg, category } = allService;
    const id = allService._id;
    return (
        <>
            <div className='p-3 md:p-5 shadow-md md:m-5 bg-slate-200 rounded-lg' data-aos="fade-up">
                <div className='flex gap-10 sm:gap-3 flex-col sm:flex-row'>
                    <div className='sm:w-2/3'>
                        <h2 className='md:text-xl font-bold'>{serviceName}</h2>
                        <div className='flex justify-start flex-col sm:flex-row'>
                            <div className='sm:w-1/2'>
                                <img src={serviceImg} className='py-5 w-full rounded-[40px]' alt="" />
                            </div>
                            <div className='mx-3 flex items-start gap-2 justify-center flex-col'>
                                <p className='font-semibold text-primary'>Price: ${price}</p>
                                <h4 className='text-xs sm:text-sm md:text-base'>Category: {category}</h4>
                                <div className='flex justify-start gap-2 md:gap-5 w-full'>
                                    {/* <button className='bg-pink-700 text-sm md:text-base text-white px-1 py-1 md:px-2 hover:bg-pink-900 duration-300'>Book Now</button> */}
                                    <Link to={`/service-detail/${id}`}><button className='bg-pink-700 text-sm md:text-base text-white px-1 py-1 md:px-2 hover:bg-pink-900 duration-300'>Details</button></Link>
                                </div>
                            </div>
                            {/* <p>{serviceDescription}</p> */}
                        </div>
                    </div>
                    <div className='mb-4 md:w-1/3'>
                        <div className='md:max-w-[300px] ml-auto border-l-slate-500 border-l pl-3'>
                            <h2 className='md:text-xl font-semibold'>Service Provider Info</h2>
                            <div className='sm:mt-5'>
                                <img src={providerImg} alt={name} className='h-20 w-20 rounded-full' />
                                <div className='sm:mt-5'>
                                    <h3 className='font-bold text-sm md:text-base'>Name: {name}</h3>
                                    <address className='text-xs md:text-base'>Service Area: {serviceArea}</address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-slate-700 text-xs sm:text-sm md:text-base line-clamp-3'>Description: {serviceDescription}</p>
            </div>
        </>
    );
};

export default IndividualService;