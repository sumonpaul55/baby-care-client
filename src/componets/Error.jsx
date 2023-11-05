import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate()
    return (
        <div className='conatiner mx-auto'>
            <div className='max-w-[400px] mx-auto mt-20 md:mt-32'>
                <div className='text-center space-y-10'>
                    <h3 className='font-bold text-xl md:text-2xl lg:text-4xl'>Page Not Found</h3>
                    <h1 className='font-bold text-3xl md:text-5xl lg:text-6xl'>404 ERROR</h1>
                    <dir className="flex gap-10 font-bold justify-center mt-16 border p-5">
                        <Link className='text-primary bg-slate-200 py-1 px-3' to="/">Go Home</Link>
                        <Link className='text-primary bg-slate-200 py-1 px-3' onClick={() => navigate(-1)}>Go Back</Link>
                    </dir>
                </div>
            </div>
        </div>
    );
};

export default Error;