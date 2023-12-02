import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { serviceArea, serviceImg, serviceName, serviceDescription, price, name, about, providerImg, _id } = service;
    // console.log(_id)

    return (
        <div className='shadow hover:shadow-lg p-3 md:p-5 rounded-md hover:bg-slate-50 duration-200' data-aos="fade-up">
            <div className='flex gap-4 flex-col lg:flex-row'>
                <div className='lg:w-5/12'>
                    <img src={serviceImg} className='w-full rounded-sm' alt="" />
                </div>
                <div className='flex-1'>
                    <h3 className='font-semibold md:text-lg'>{serviceName}</h3>
                    <p className='text-primary font-bold border my-2 border-slate-100'>Price: ${price}</p>
                    <p className='text-slate-700 text-sm line-clamp-2'>{serviceDescription}</p>
                    <Link to={`/service-detail/${_id}`}><button className='px-2 md:px-3 py-2 bg-primary mt-4 text-white text-sm'>View Detail</button></Link>
                </div>
            </div>
            <div className='mt-10'>
                <h4 className='font-semibold mb-4 border-b pb-1'>Service Provider Info:</h4>
                <div className='flex gap-5 justify-between items-center'>
                    <div className='space-y-1 flex-1'>
                        <h2 className='font-bold'>Name: {name}</h2>
                        <address>Location: {serviceArea}</address>
                        <p className='text-[12px]'>{about}</p>
                    </div>
                    <div className=''>
                        {
                            providerImg ? <img src={providerImg} referrerPolicy='no-referrer' className='w-20 h-20 rounded-full' /> :
                                <span className='text-5xl'><RxAvatar /></span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;