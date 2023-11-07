import React from 'react';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';

const BookingSingle = ({ bookedService, refetch }) => {
    // console.log(bookedService)
    const useAxiosSecure = useAxios()
    const { _id, serviceName, price, serviceTakingData, serviceImg, status } = bookedService;


    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You have to book again from all service page.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                useAxiosSecure.delete(`/bookings-delete/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `${<span className='text-primary'>{serviceName}</span>} has been deleted.`,
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    return (
        <div className='bg-slate-100 p-3 md:p-5 rounded-md my-3 py-5'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-4">
                <div className='space-y-3'>
                    <h2 className='font-semibold'>Service Name: {serviceName}</h2>
                    <p className='font-semibold'>Price: ${price}</p>
                    <p className='font-semibold'>Date: {serviceTakingData}</p>
                </div>
                <div className='text-center'><img className='w-32 h-32 rounded-full mx-auto' src={serviceImg} alt="" /></div>
                <div className='bg-slate-200 text-pink-600 white px-3 py-2 '>
                    <span className='text-black mr-4'>Your Service is:</span> {status}
                </div>
                <div className='text-center'>
                    <button className='w-full bg-pink-600 rounded-md hover:bg-pink-700 sm:mx-2 py-2 text-white' onClick={() => handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default BookingSingle;