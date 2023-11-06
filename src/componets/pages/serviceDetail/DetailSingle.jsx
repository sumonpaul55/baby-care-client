import React from 'react';

const DetailSingle = ({ singleDetailService }) => {
    const { _id, serviceArea, serviceImg, serviceName, serviceDescription, price, name, email, about, providerImg, category } = singleDetailService
    return (
        <>
            <div>
                <div className='shadow bg-slate-300 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-3'>
                    <div className='bg-slate-300 p-3 md:p-4'>
                        <div className=''>
                            <img src={serviceImg} className='rounded' alt="" />
                            <div className='flex items-center justify-between'>
                                <h2 className='font-bold text-base md:text-xl lg:text-2xl py-3'>{serviceName}</h2>
                                <p className='font-bold text-xl'>Price: ${price}</p>
                            </div>
                            <address className='text-base md:text-lg font-semibold text-primary'><span className='text-black'>Service Area:</span> {serviceArea}</address>
                            <p className='text-xs my-3 md:text-base'>{serviceDescription}</p>

                        </div>
                    </div>
                    <div className='p-3 md:p-4'>
                        <p className='font-semibold md:text-lg border-b-2 border-slate-400'>Service Provider Information:</p>
                        <div className='space-y-3'>
                            <img src={providerImg} className='sm:w-40 pt-3 block' alt="" />
                            <h2 className='md:text-xl font-bold'>Name: {name}</h2>
                            <p>Email: {email}</p>
                            <p className='text-indigo-950 font-semibold text-xs md:text-base'>About: {about}</p>
                            <h3 className='font-bold pt-10 text-xl'>Category: {category}</h3>
                        </div>
                        <div className='mt-10 md:mt-20 text-center'>
                            <button className='w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-slate-600 duration-300'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailSingle;