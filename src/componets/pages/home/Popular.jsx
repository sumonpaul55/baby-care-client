import React from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
const Popular = ({ popular }) => {
    const { serviceName, serviceImg, serviceDescription, _id } = popular;
    return (
        <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 1 }}
        >
            <div className='bg-white p-3 rounded-lg shadow-lg'>
                <div>
                    <img src={serviceImg} alt="" />
                    <h2 className='py-3 font-bold text-lg md:text-xl'>{serviceName}</h2>
                    <p className='text-slate-600 line-clamp-4'>{serviceDescription}</p>
                </div>
                <div className='mt-3 text-center'>
                    <Link to={`/service-detail/${_id}`}><button className='px-2 md:px-3 py-2 bg-primary w-full mt-4 text-white text-sm'>View Details</button></Link>

                </div>
            </div>
        </motion.div >
    );
};
export default Popular;