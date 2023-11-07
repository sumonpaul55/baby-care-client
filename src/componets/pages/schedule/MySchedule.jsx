import React, { useContext } from 'react';
import HelmetProvider from '../../../shared/HelmetProvider';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';
import { AuthContextInfo } from '../../../authProvider/AuthProvider';
import Loading from '../../../shared/Loading';
// import SingleService from '../allService/SingleService';
import BookingSingle from './BookingSingle';
import PendingPerService from './PendingPerService';

const Bookings = () => {
    const useAxiosSecure = useAxios()

    const { user } = useContext(AuthContextInfo)
    const { data: bookedService, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["bookedService"],
        queryFn: () => {
            return useAxiosSecure.get(`/my-bookings?email=${user?.email}`)
        }
    })
    const { data: pendingService, refetch: prendingRefatch } = useQuery({
        queryKey: ["pendingService"],
        queryFn: () => {
            return useAxiosSecure.get(`/pending-service?email=${user?.email}`)
        }
    })
    // console.log(pendingService.data)
    if (isLoading) {
        <Loading></Loading>
    }
    if (isError) {
        <p>{error}</p>
    }
    if (bookedService?.data.length <= 0 && pendingService?.data.length <= 0) {
        return <h3 className='text-center mt-20 font-bold text-xl md:text-2xl'>No shcedule</h3>
    }
    return (
        <>
            <HelmetProvider pagename="Bookings"></HelmetProvider>
            <main>
                <div className='py-10 bg-slate-300 '>
                    <h1 className='text-lg md:text-3xl text-center font-bold'>All Sechedules</h1>
                </div>
                <div className='container mx-auto'>
                    <div className='mt-10'>
                        <h1 className='md:text-xl font-bold'>My Bookings</h1>
                        {

                            bookedService?.data.map(items => {
                                return <BookingSingle key={items._id} bookedService={items} refetch={refetch}></BookingSingle>
                            })
                        }
                    </div>
                </div>
                <section className='py-10 bg-slate-200 mt-16'>
                    <div className='container mx-auto'>
                        <h1 className='md:text-xl font-bold md:m-4'>My Pending works</h1>
                        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2'>
                            {
                                pendingService?.data.length <= 0 ?
                                    <h2 className='text-center mt-8 text-xl'> No Pending Works Available</h2> :
                                    pendingService?.data.map(items => {
                                        return <PendingPerService key={items._id} pendingServce={items} prendingRefatch={prendingRefatch}></PendingPerService>
                                    })
                            }
                        </div>
                    </div>
                </section>
            </main >
        </>
    );
};

export default Bookings;