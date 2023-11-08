import React from 'react';
import { motion } from "framer-motion"
const Popular = ({ popular }) => {
    console.log(popular)
    const { serviceName, serviceImg, serviceDescription } = popular;
    return (
        <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.8 }}
        >
            <div className='bg-white p-3 rounded-lg shadow-lg'>
                <div>
                    <img src={serviceImg} alt="" />
                    <h2 className='py-3 font-bold text-lg md:text-xl'>{serviceName}</h2>
                    <p className='text-slate-600 line-clamp-4'>{serviceDescription}</p>
                </div>
            </div>
        </motion.div >
    );
};

export default Popular;