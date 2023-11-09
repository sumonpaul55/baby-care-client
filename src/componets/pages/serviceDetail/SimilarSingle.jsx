import React from 'react';
import { Link } from 'react-router-dom';

const SimilarSingle = ({ similarData }) => {
    // const id = useParams().id;
    // const useAxiosSecur = useAxios()
    // console.log(id)

    // console.log(similarData)
    const { serviceName, serviceImg, price, category, _id } = similarData;
    return (
        <div className='p-3 border bg-slate-300 shadow-lg md:p-5'>
            <h2 className='font-bold mb-3 md:text-base md:mb-4'>{serviceName}</h2>
            <img src={serviceImg} className='w-full' alt="" />
            {/* <Link to={`/service-detail/${_id}`} className='bg-pink-600 py-1 px-2 text-white block mt-5 md:py-3 text-center'>View </Link> */}
            <div className='space-y-2'>
                <p className='mt-2 font-semibold'>Price : {price}</p>
                <p>Category: {category}</p>
            </div>
            <Link to={`/service-detail/${_id}`}><button className='px-2 md:px-3 py-2 bg-primary mt-4 text-white text-sm'>View Detail</button></Link>
        </div>
    );
};

export default SimilarSingle;