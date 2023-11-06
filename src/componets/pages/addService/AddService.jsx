import React, { useContext } from 'react';
import HelmetProvider from '../../../shared/HelmetProvider';
import { AuthContextInfo } from '../../../authProvider/AuthProvider';
import useAxios from '../../../hooks/useAxios';
import { toast } from 'react-toastify';

const AddService = () => {
    const useAxiosSecure = useAxios();
    const { user } = useContext(AuthContextInfo)
    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const serviceImg = form.serviceImg.value;
        const serviceDescription = form.serviceDescription.value;
        const price = form.price.value;
        const name = form.name.value;
        const email = form.email.value;
        const serviceArea = form.serviceArea.value;
        const about = form.about.value;
        const myService = { serviceArea, serviceImg, serviceName, serviceDescription, price, name, email, about }
        // console.log(myService)
        useAxiosSecure.post("/add-service", myService)
            .then(res => {
                if (res.data.insertedId) {
                    toast("Service Add Successfully", {
                        position: "top-center",
                        autoClose: 2000
                    })
                    form.reset();
                }
            })
            .catch(err => {
                toast(err, {
                    position: "top-center",
                    autoClose: 2000
                })
            })
    }
    return (
        <>
            <HelmetProvider pagename="Add Service"></HelmetProvider>
            <main className='py-5 bg-slate-600 text-white'>
                <div className='container mx-auto'>
                    <form onSubmit={handleAddService}>
                        <div className='space-y-4 font-medium max-w-[700px] mx-auto border px-2 md:px-10 py-5 rounded-lg'>
                            <h3 className="text-center font-semibold text-xl">Add a service</h3>
                            <div className='pb-2'>
                                <label htmlFor="">Service Name</label><br />
                                <input type="text" className='w-full p-2 rounded-md focus:outline-primary text-black font-normal border' name='serviceName' placeholder='Service Name' required />
                            </div>
                            <div className='pb-2'>
                                <label htmlFor="">Service Img url</label><br />
                                <input type="text" className='w-full p-2 rounded-md focus:outline-primary text-black font-normal border' name='serviceImg' placeholder='Service Img url' required />
                            </div>
                            <div className='pb-2'>
                                <div className='flex gap-2'>
                                    <div className='w-full'>
                                        <label htmlFor="">Service description</label><br />
                                        <textarea id="" cols="30" rows="1" className='w-full p-2 rounded-md focus:outline-primary text-black font-normal border' name='serviceDescription' placeholder='Service description' required></textarea>
                                    </div>
                                    <div>
                                        <label htmlFor="">Price</label>
                                        <input type="text" className='w-full p-2 rounded-md focus:outline-primary text-black font-normal border' name='price' placeholder='Price $' required />
                                    </div>
                                </div>
                            </div>
                            {/* Your name and Email */}
                            <div className='space-y-4'>
                                <div className='pb-2'>
                                    <label htmlFor="">Your Name</label><br />
                                    <input type="text" className='w-full p-2 rounded-md focus:outline-primary text-black font-normal border' name='name' defaultValue={user?.displayName} disabled required />
                                </div>
                                <div className='pb-2'>
                                    <label htmlFor="">Your Email</label><br />
                                    <input type="text" className='w-full p-2 rounded-md focus:outline-primary text-black font-normal border' name='email' defaultValue={user?.email} disabled required />
                                </div>
                            </div>
                            <div className='pb-2'>
                                <div className='flex gap-2'>
                                    <div className='w-full'>
                                        <label htmlFor="">About Your self</label><br />
                                        <textarea id="" cols="30" rows="1" className='w-full p-2 rounded-md focus:outline-primary text-black font-normal border' name='about' placeholder='About you self' required></textarea>
                                    </div>
                                    <div>
                                        <label htmlFor="">Service Area</label>
                                        <input type="text" className='w-full p-2 rounded-md focus:outline-primary text-black font-normal border' placeholder='Service Area' name="serviceArea" required />
                                    </div>
                                </div>
                            </div>
                            <input type="submit" value="Add Service" className='btn btn-secondary w-full bg-slate-500 cursor-pointer text-white py-2 rounded-md mt-5 hover:bg-primary duration-200' />
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default AddService;