import React from 'react';
import { useRef } from 'react';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';

const PendingPerService = ({ pendingServce, prendingRefatch }) => {
    const { _id, serviceImg, userName, userEmail, userAddress, serviceName, serviceTakingData, price } = pendingServce;
    const selectStatus = useRef();
    const useAxiosSecure = useAxios();
    const handleStatus = () => {
        const selectedField = { status: selectStatus.current.value }
        useAxiosSecure.patch(`/update-booking-service-status/${_id}`, selectedField)
            .then(res => {
                // console.log(res)
                if (res.data.modifiedCount) {
                    Swal.fire({ title: "Status Updated Successfull", icon: "success" })
                }
                prendingRefatch()
            })
            .catch(err => {
                Swal.fire({ title: `${err}`, icon: "error" })
            })
    }
    return (
        <div className='bg-white m-1 p-3 md:p-4 shadow-lg'>
            <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row gap-8 md:gap-5'>
                <div>
                    <h3 className='my-2 font-bold mt-3 text-pink-600'>{serviceName}</h3>
                    <img src={serviceImg} className='h-40 w-40 rounded-full' alt="" />
                </div>
                <div className='flex flex-col'>
                    <div className='space-y-3 mx-3'>
                        <h3 className='md:text-sm text-lg'><span className='font-bold'>User Name: </span>{userName}</h3>
                        <h3 className='md:text-sm text-lg'><span className='font-bold'>User Mail: </span>{userEmail}</h3>
                        <address className='md:text-sm text-lg'><span className='font-bold'>Address: </span>{userAddress}</address>
                        <p className='md:text-sm text-lg'><span className='font-bold'>Date: </span>{serviceTakingData}</p>
                        <p><span className='font-bold'>Price:</span> ${price}</p>
                    </div>
                    <div className='p-4 border mt-4 bg-pink-600'>
                        <div className='flex gap-2'>
                            <select name="status" id="" className='border w-full px-3' ref={selectStatus}>
                                <option defaultValue="pending">pending</option>
                                <option value="in-progress">in-progress</option>
                                <option value="complete">complate</option>
                            </select>
                            <button onClick={() => handleStatus(_id)} className='px-1 font-bold cursor-pointer bg-white text-primary'>Update</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PendingPerService;