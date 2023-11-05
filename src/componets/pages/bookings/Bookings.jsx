import React from 'react';
import HelmetProvider from '../../../HelmetProvider';

const Bookings = () => {
    return (
        <>
            <HelmetProvider pagename="Bookings"></HelmetProvider>
            <main
            ><div className='container mx-auto'>
                    <h1 className='text-4xl'>Bookings</h1>
                </div>
            </main>
        </>
    );
};

export default Bookings;