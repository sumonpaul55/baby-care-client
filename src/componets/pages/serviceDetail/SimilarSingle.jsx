import React from 'react';
// import { Link } from 'react-router-dom';

const SimilarSingle = ({ similarData }) => {
    // console.log(similarData)
    const { serviceName, serviceImg, price } = similarData;
    return (
        <div className='p-3 border bg-slate-300 shadow-lg md:p-5'>
            <h2 className='font-bold mb-3 md:text-xl md:mb-4'>{serviceName}</h2>
            <img src={serviceImg} className='w-full' alt="" />
            {/* <Link to={`/service-detail/${_id}`} className='bg-pink-600 py-1 px-2 text-white block mt-5 md:py-3 text-center'>View </Link> */}
            <p className='mt-2 font-semibold'>Price : {price}</p>
        </div>
    );
};

export default SimilarSingle;