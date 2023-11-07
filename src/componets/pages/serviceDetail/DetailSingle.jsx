import { Box, Modal } from '@mui/material';

import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContextInfo } from '../../../authProvider/AuthProvider';
// import HelmetProvider from '../../../shared/HelmetProvider';

const DetailSingle = ({ singleDetailService }) => {
    const { _id, serviceArea, serviceImg, serviceName, serviceDescription, price, name, email, about, providerImg, category, location } = singleDetailService;

    // // setPageName(serviceName)
    // if (serviceName) {
    //     setPageName(serviceName)
    // }
    const { user } = useContext(AuthContextInfo)
    const handleBook = e => {
        e.preventDefault();
        setOpen(false);


        toast(`Your Booking Successful`, {
            position: "top-center",
            autoClose: 2000
        })
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: "800px",
        bgcolor: '#ccd',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div>
                <div className='shadow bg-slate-300 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-3'>
                    <div className='p-3 md:p-4'>
                        <div className=''>
                            <img src={serviceImg} className='rounded' alt="" />
                            <div className='flex items-center justify-between'>
                                <h2 className='font-bold text-base md:text-xl lg:text-2xl py-3'>{serviceName}</h2>
                                <p className='font-bold text-xl'>Price: ${price}</p>
                            </div>
                            <address className='text-base md:text-lg font-semibold text-primary'><span className='text-black'>Service Area:</span> {serviceArea}</address>
                            <p className='text-xs my-3 md:text-base'>{serviceDescription}</p>

                        </div>
                    </div>
                    <div className='p-3 md:p-4 flex flex-col justify-between'>
                        <div className=''>
                            <p className='font-semibold md:text-lg border-b-2 border-slate-400'>Service Provider Information:</p>
                            <div className='space-y-3 border-l-2 border-slate-500 px-3'>
                                <img src={providerImg} className='sm:w-40 pt-3 block' alt="" />
                                <h2 className='md:text-xl font-bold'>Name: {name}</h2>
                                <p>Email: {email}</p>
                                <p className='text-indigo-950 font-semibold text-xs md:text-base'>About: {about}</p>
                                <h3 className='font-bold pt-10 text-xl'>Category: {category}</h3>
                                <address className='font-bold'>Locaiton: {location}</address>
                            </div>
                        </div>
                        <div className='mt-10 md:mt-20 text-center'>
                            <button className='w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-slate-600 duration-300' data-hs-overlay="#hs-modal-upgrade-to-pro" onClick={handleOpen}>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal */}
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <h3 className='font-semibold text-base'> Booking Information:</h3>
                        <div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                <img src={serviceImg} className='' alt="" />
                                <div>
                                    <span className='font-semibold'>Service Provider Info:</span>
                                    <p className='font-semibold mt-4 text-xs md:text-base'>Email: {email}</p>
                                </div>
                            </div>
                            <form onSubmit={handleBook} className=''>
                                <div className='flex gap-3 '>
                                    <div className='my-3 w-full'>
                                        <label className='font-semibold pb-1' htmlFor="">Service Name</label><br />
                                        <input type="text" defaultValue={serviceName} disabled className='px-2 py-1 border-slate-400 border outline-none border-none w-full' />
                                    </div>
                                    <div className='my-3 w-full'>
                                        <label className='font-semibold pb-1' htmlFor="">User Email</label><br />
                                        <input type="text" defaultValue={user?.email} disabled className='px-2 py-1 border-slate-400 border w-full' />
                                    </div>
                                </div>
                                <div className='flex gap-3 '>
                                    <div className='my-3 w-full'>
                                        <label className='font-semibold pb-1' htmlFor="">Service Taking Date</label><br />
                                        <input type="date" defaultValue={serviceName} disabled className='px-2 py-1 border-slate-400 border outline-none border-none w-full' />
                                    </div>
                                    <div className='my-3 w-full'>
                                        <label className='font-semibold pb-1' htmlFor="">User Email</label><br />
                                        <input type="text" defaultValue={user?.email} disabled className='px-2 py-1 border-slate-400 border w-full' />
                                    </div>
                                </div>
                                <input className='px-1 py-1 w-full bg-slate-600 cursor-pointer text-white hover:bg-pink-600 duration-200 outline-none border-none' type="submit" value="Book" />
                            </form>
                        </div>
                    </Box>
                </Modal>
            </div>

        </>
    );
};

export default DetailSingle;