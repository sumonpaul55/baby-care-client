import React from 'react';

import HelmetProvider from '../../../shared/HelmetProvider';

const AllService = () => {
    return (
        <>
            <HelmetProvider pagename="All Services"></HelmetProvider>
            <main className='py-20 bg-slate-100'>
                <div className='container mx-auto'>
                    <h1 className='text-xl text-center font-bold md:text-4xl'>all Service</h1>
                    <div className="py-10">

                    </div>
                </div>
            </main>
        </>
    );
};

export default AllService;