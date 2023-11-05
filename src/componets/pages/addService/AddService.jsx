import React from 'react';
import HelmetProvider from '../../../HelmetProvider';

const AddService = () => {
    const handleAddService = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <HelmetProvider pagename="Add Service"></HelmetProvider>
            <main>
                <div>
                    <form onSubmit={handleAddService}>
                        <div className='space-y-6 font-semibold max-w-[600px] mx-auto mt-20'>
                            <div>
                                <label htmlFor="">Product Name</label><br />
                                <input type="email" className='w-full p-2 rounded-md border' name='productName' placeholder='Product Name' required />
                            </div>
                            <div className='pb-6 relative'>
                                <label htmlFor="">Password</label><br />
                                <input type="text" className='w-full p-2 rounded-md border' name='password' placeholder='Password' required />
                            </div>
                            <input type="submit" value="Add Service" className='btn btn-secondary w-full bg-slate-500 cursor-pointer text-white py-2 rounded-md mt-5 hover:bg-slate-600 duration-200' />
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default AddService;