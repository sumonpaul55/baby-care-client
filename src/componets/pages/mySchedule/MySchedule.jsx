import React from 'react';
import HelmetProvider from '../../../HelmetProvider';

const MySchedule = () => {
    return (
        <>
            <HelmetProvider pagename="My Schedule"></HelmetProvider>
            <main className='bg-slate-200'>
                <div className='container mx-auto'>
                    <h1 className='text-4xl'>Schedule</h1>
                </div>
            </main>
        </>
    );
};

export default MySchedule;