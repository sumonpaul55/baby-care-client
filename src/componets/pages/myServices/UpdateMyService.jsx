import { } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAxios from '../../../hooks/useAxios';
import { toast } from 'react-toastify';

const UpdateMyService = () => {
    const useAxiosSecure = useAxios();
    const service = useLoaderData()[0];
    // console.log(service)
    const navigate = useNavigate();
    const { _id, serviceArea, serviceImg, serviceName, serviceDescription, price, name, email, about, providerImg, category, location } = service

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.updateserviceName.value;
        const serviceArea = form.updateserviceArea.value;
        const serviceDescription = form.updateserviceDescription.value;
        const serviceImg = form.updateserviceImg.value;
        const price = form.updateprice.value;
        const name = form.updatename.value;
        const email = form.updateemail.value;
        const about = form.updateabout.value;
        const providerImg = form.updateproviderImg.value;
        const category = form.updatecategory.value;
        const location = form.updatelocation.value;
        const updatedService = {
            serviceName, serviceArea, serviceDescription, serviceImg, price, name, email, about, providerImg, category, location
        }
        useAxiosSecure.put(`/update-myService/${_id}`, updatedService)
            .then(res => {
                if (res.data.modifiedCount) {
                    toast(`${serviceName} updated succesfully`, {
                        autoClose: 2000,
                        position: "bottom-right"
                    })
                    navigate(-1)
                }
            }).catch(err => {
                toast(`${err}`, {
                    position: "bottom-right",
                    autoClose: 2000
                })
            })
    }
    return (
        <div className='container mx-auto bg-slate-300 shadow-lg p-4 mt-10 rounded-lg py-10'>
            <div>
                <h2 className='font-bold mb-5 border-b pb-1'>Update : {serviceName} Service</h2>
                <form onSubmit={handleUpdate}>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 mt-8'>
                        <div>
                            <label className='font-semibold' htmlFor="">Service Name</label><br />
                            <input type="text" name='updateserviceName' className='p-1 w-full mt-1 rounded-sm px-2' defaultValue={serviceName} />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor="">Service Area</label><br />
                            <input type="text" name='updateserviceArea' className='p-1 w-full mt-1 rounded-sm px-2' defaultValue={serviceArea} />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor="">Service Description</label><br />
                            <input type="text" name='updateserviceDescription' className='p-1 w-full mt-1 rounded-sm px-2' defaultValue={serviceDescription} />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor="">Service Img</label><br />
                            <input type="text" name='updateserviceImg' className='p-1 w-full mt-1 rounded-sm px-2' defaultValue={serviceImg} />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor="">Service price</label><br />
                            <input type="text" name='updateprice' className='p-1 w-full mt-1 rounded-sm px-2' defaultValue={price} />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor="">Your name</label><br />
                            <input type="text" name='updatename' className='p-1 w-full mt-1 rounded-sm px-2' defaultValue={name} />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor="">Your email</label><br />
                            <input type="email" name='updateemail' className='p-1 w-full mt-1 rounded-sm px-2' defaultValue={email} />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor="">Your about</label><br />
                            <input type="text" name='updateabout' className='p-1 w-full mt-1 rounded-sm px-2' defaultValue={about} />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor="">Your img</label><br />
                            <input type="text" name='updateproviderImg' className='p-1 w-full mt-1 rounded-sm px-2' defaultValue={providerImg} />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor="">category</label><br />
                            <input type="text" name='updatecategory' className='p-1 w-full mt-1 rounded-sm px-2' defaultValue={category} />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor="">category</label><br />
                            <input type="text" name='updatelocation' className='p-1 w-full mt-1 rounded-sm px-2' defaultValue={location} />
                        </div>
                    </div>
                    <div className='max-w-[400px] text-center mx-auto'>
                        <input type="submit" value="Update Service" className='mt-10 px-2  md:px-5 rounded-full hover:bg-pink-500 cursor-pointer bg-primary text-white py-2' />
                    </div>
                </form>
            </div >
        </div >
    );
};

export default UpdateMyService;