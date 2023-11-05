import Lottie from 'lottie-react';
import React from 'react';
import contactus from "../../assets/contactus.json"
import { Helmet } from 'react-helmet-async';
const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Littlestarscare || contact us</title>
            </Helmet>
            <main className='py-10 bg-slate-600'>
                <div className='container mx-auto'>
                    <h2 className='text-cennter text-white text-xl md:text-3xl font-bold text-center'>Contact Us</h2>
                    <div className='gap-4 grid grid-cols-1 md:grid-cols-2 items-center'>
                        <div className='p-4 md:p-10 border border-slate-500'>
                            <form className='space-y-6'>
                                <div className='flex gap-2 flex-col text-white'>
                                    <label htmlFor="">Name</label>
                                    <input type="text" placeholder='You Name' name='name' className='w-full border px-2 py-1 rounded-md' required />
                                </div>
                                <div className='flex gap-2 flex-col text-white'>
                                    <label htmlFor="">Email</label>
                                    <input type="email" placeholder='Your email' className='w-full border px-2 py-1 rounded-md' required />
                                </div>
                                <div className='flex gap-2 flex-col text-white'>
                                    <label htmlFor="">Message</label>
                                    <textarea name="" id="" rows="3" className='w-full border px-2 py-1 rounded-md' required></textarea>
                                </div>
                                <input type="submit" value="Sent" className='w-full text-white bg-primary py-2 rounded-md hover:bg-slate-500 duration-300 cursor-pointer' />
                            </form>
                        </div>
                        <div>
                            <Lottie animationData={contactus} loop={true}></Lottie>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Contact;