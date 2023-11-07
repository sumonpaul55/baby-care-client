import React from 'react';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';

const MyServiceSingle = ({ MyServiceSingle, refetch }) => {
    const useAxiosSecure = useAxios()
    const { serviceName, serviceImg, serviceArea, price, serviceDescription, _id } = MyServiceSingle;
    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                useAxiosSecure.delete(`/delete-myService/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Service has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    }).catch(err => {
                        Swal.fire({
                            title: "Deleted!",
                            text: `${err}`,
                            icon: "success"
                        });
                    })

            }
        });


    }
    return (
        <div className='p-5 md:p-4 bg-slate-300 m-1 md:m-4 rounded-md shadow-lg'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-8 gap-3 items-center'>
                <div className='lg:space-y-4 md:col-span-2'>
                    <h2 className='md:text-xl font-bold'>{serviceName}</h2>
                    <p className=''><span className='font-bold'>Price:</span> {price}</p>
                    <p className=''><span className='font-bold'>Service Area:</span> {serviceArea}</p>
                    <p className='text-sm'>Description: {serviceDescription}</p>
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <img src={serviceImg} className='w-full md:w-full lg:auto' alt={serviceName} />
                </div>
                <div className='flex gap-4w-full gap-5 h-full items-end lg:items-center'>
                    <button className='w-full sm:w-auto px-2 bg-primary text-white font-semibold sm:px-3 py-1'>Update</button>
                    <button className='w-full sm:w-auto px-2 bg-primary text-white font-semibold sm:px-3 py-1' onClick={() => handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyServiceSingle;