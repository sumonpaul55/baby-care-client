import { Box, Modal } from '@mui/material';

import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContextInfo } from '../../../authProvider/AuthProvider';
import useAxios from '../../../hooks/useAxios';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import SimilarSingle from './SimilarSingle';
import Loading from '../../../shared/Loading';
// import HelmetProvider from '../../../shared/HelmetProvider';

const DetailSingle = ({ singleDetailService }) => {
    const { user } = useContext(AuthContextInfo)
    const { serviceArea, serviceImg, serviceName, serviceDescription, price, name, email, about, providerImg, category, location } = singleDetailService;
    const useAxiosSecure = useAxios()
    const navigate = useNavigate()

    const handleBook = e => {
        e.preventDefault();
        setOpen(false);
        const form = e.target;
        const serviceTakingData = form.date.value;
        const intructions = form.specialInstruction.value;
        const userAddress = form.address.value;
        const status = "pending";
        const userName = user?.displayName;
        const userEmail = user?.email;
        const serviceProviderEmail = email;
        const bookedData = {
            serviceImg, name, userName, status, userAddress, userEmail, intructions, serviceTakingData, price, location, serviceName, serviceProviderEmail
        }
        useAxiosSecure.post("/books", bookedData)
            .then(res => {
                if (res.data.insertedId) {
                    toast(`Your Booking Successful`, {
                        position: "bottom-right",
                        autoClose: 2000
                    })
                    navigate(-1)
                }
            })
            .catch(err => {
                toast(err, {
                    autoClose: 200,
                    position: "bottom-right"
                })
            })

    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: 800,
        bgcolor: '#ccd',
        border: '2px solid #000',
        boxShadow: 24,
        p: 1,
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { data: simislarService, isError, error, isLoading } = useQuery({
        queryKey: ["similarService"],
        queryFn: () => {
            return useAxiosSecure.get(`/similar?category=${category}`)
        }
    })
    return (
        <>
            <div>
                <div className='shadow bg-slate-300 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-3'>
                    <div className='p-3 md:p-4'>
                        <div className=''>
                            <img src={serviceImg} className='rounded' alt="" />
                            <div className='flex items-center justify-between'>
                                <h2 className='font-bold text-base md:text-xl lg:text-2xl py-3'>{serviceName}</h2>
                                <p className='font-bold text-xl text-primary'>Price: ${price}</p>
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
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <h3 className='font-semibold text-base'> Booking Information:</h3>
                        <div className='md:max-w-[700px] mx-auto'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                <img src={serviceImg} className='hidden md:block' alt="" />
                                <div>
                                    <span className='font-semibold hidden md:block'>Service Provider Info:</span>
                                    <p className='font-semibold mt-4 text-xs md:text-base'>Name: {name}</p>
                                    <address>Address: {location}</address>
                                </div>
                            </div>
                            <form onSubmit={handleBook} className=''>
                                <div className='flex md:gap-3 md:flex-row flex-col'>
                                    <div className='my-1 md:my-3 w-full'>
                                        <label className='font-semibold pb-1' htmlFor="">Service Name</label><br />
                                        <input required type="text" defaultValue={serviceName} disabled name='serviceName' className='px-2 py-1 border-slate-400 border outline-none border-none text-xs md:text-base w-full' />
                                    </div>
                                    <div className='my-1 md:my-3 w-full'>
                                        <label className='font-semibold pb-1' htmlFor="">User Email</label><br />
                                        <input required type="text" name="userEmail" defaultValue={user?.email} disabled className='px-2 py-1 border-slate-400 border w-full' />
                                    </div>
                                    <div className='my-1 md:my-3 w-full'>
                                        <label className='font-semibold pb-1' htmlFor="">Service Provier Email</label><br />
                                        <input required type="text" name="serviceProviderEmail" defaultValue={email} disabled className='px-2 py-1 border-slate-400 border w-full' />
                                    </div>
                                </div>
                                <div className='flex md:gap-3 flex-col md:flex-row'>
                                    <div className='my-1 md:my-3 w-full'>
                                        <label className='font-semibold pb-1' htmlFor="">Service Taking Date</label><br />
                                        <input required type="date" name='date' className='px-2 py-1 border-slate-400 border outline-none border-none text-xs md:text-base w-full' />
                                    </div>
                                    <div className='my-1 md:my-3 w-full'>
                                        <label className='font-semibold pb-1' htmlFor="">Special Instructions</label><br />
                                        <input required type="text" placeholder='Special Instructions' name="specialInstruction" className='px-2 py-1 border-slate-300 border w-full' />
                                    </div>
                                </div>
                                <div className='flex md:gap-3 flex-col md:flex-row'>
                                    <div className='my-1 md:my-3 w-full'>
                                        <label className='font-semibold pb-1' htmlFor="">Your Address</label><br />
                                        <input required type="text" name='address' placeholder='Your Address' className='px-2 py-1 border-slate-400 border outline-none border-none text-xs md:text-base w-full' />
                                    </div>
                                    <div className='my-1 md:my-3 w-full'>
                                        <label className='font-semibold pb-1' htmlFor="">Price</label><br />
                                        <input required type="text" placeholder='Special Instructions' defaultValue={price} disabled name="price" className='px-2 py-1 border-slate-400 border w-full font-bold' />
                                    </div>
                                </div>
                                <input className='px-1 py-1 mt-3 w-full bg-slate-600 cursor-pointer text-white hover:bg-pink-600 duration-200 outline-none border-none text-xs md:text-base' type="submit" value="Purchase" />
                            </form>
                        </div>
                    </Box>
                </Modal>
            </div>
            <section className='mt-10 bg-slate-200 py-10 p-4'>
                <h1 className='font-bold md:text-lg'>Explore Similer Services</h1>
                {
                    isLoading && <Loading></Loading> ? isError && <p>{error}</p> :
                        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10 mt-10'>
                            {simislarService?.data.map((items, idx) => {
                                return <SimilarSingle key={idx} similarData={items}></SimilarSingle>
                            })}
                        </div>
                }
            </section>
        </>
    );
};

export default DetailSingle;