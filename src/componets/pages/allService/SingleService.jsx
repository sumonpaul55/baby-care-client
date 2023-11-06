import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { _id, serviceArea, serviceImg, serviceName, serviceDescription, price, name, email, about } = service;
    return (
        <div className='shadow p-3 md:p-5 rounded-md'>
            <div className='flex gap-4 flex-col lg:flex-row'>
                <div className='lg:w-5/12'>
                    <img src={serviceImg} className='w-full' alt="" />
                </div>
                <div className='flex-1'>
                    <h3 className='font-semibold md:text-lg'>{serviceName}</h3>
                    <p className='text-primary font-bold border my-2 border-slate-100'>Price: ${price}</p>
                    <p className='text-slate-700 text-sm line-clamp-2'>{serviceDescription}</p>
                    <button className='px-2 md:px-3 py-2 bg-primary mt-4 text-white text-sm'><Link>View Details</Link></button>
                </div>
            </div>
            <div className='mt-10'>
                <h4 className='font-semibold mb-4 border-b pb-1'>Service Provider Info:</h4>
                <div className='space-y-1'>
                    <h2>Name: {name}</h2>
                    <address>Location: {serviceArea}</address>
                    <p className='text-sm'>{about}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleService;