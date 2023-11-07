import React, { useContext } from 'react';
import HelmetProvider from '../../../shared/HelmetProvider';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';
import { AuthContextInfo } from '../../../authProvider/AuthProvider';
import Loading from '../../../shared/Loading';
import SingleService from '../allService/SingleService';

const Bookings = () => {
    const useAxiosSecure = useAxios()
    const { user } = useContext(AuthContextInfo)
    const { data: bookedService, isLoading, isError, error } = useQuery({
        queryKey: ["bookedService"],
        queryFn: () => {
            return useAxiosSecure.get(`/my-bookings?email=${user?.email}`)
        }
    })

    if (isLoading) {
        <Loading></Loading>
    }
    if (isError) {
        <p>{error}</p>
    }
    if (bookedService?.data.length <= 0) {
        return <h3 className='text-center mt-20 font-bold text-xl md:text-2xl'>No Service booked Yet</h3>
    }
    return (
        <>
            <HelmetProvider pagename="Bookings"></HelmetProvider>
            <main
            ><div className='container mx-auto'>
                    <h1 className='text-4xl text-center font-bold mt-10'>Bookings</h1>
                    <div>
                        {
                            bookedService?.data.map(items => {
                                return <SingleService key={items._id} service={items}></SingleService>
                            })
                        }
                    </div>
                </div>
            </main>
        </>
    );
};

export default Bookings;