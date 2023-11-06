/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import HelmetProvider from '../../../shared/HelmetProvider';
import useAxios from '../../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../shared/Loading';
import IndividualService from './IndividualService';

const AllService = () => {
    const useAxiosSecure = useAxios();
    const [numberOfService, setNumberOfService] = useState(6)
    const { data: services, isError, error, isLoading } = useQuery({
        queryKey: ["allServices"],
        queryFn: () => {
            return useAxiosSecure("/all-service")
        }
    })
    // console.log(services.data)
    if (isLoading) {
        return <Loading></Loading>
    }
    if (isError) {
        <p className='text-center'>{error}</p>
    }
    return (
        <>
            <HelmetProvider pagename="All Services"></HelmetProvider>
            <main className='pb-20 pt-10 bg-slate-100'>
                <div className='container mx-auto'>
                    <h1 className='text-xl text-center font-bold md:text-4xl'>all Service</h1>
                    <div className="py-10">
                        <div className='md:max-w-[900px] gap2 mx-auto grid grid-cols-1'>
                            {
                                services.data.slice(0, numberOfService).map((service) => (
                                    <IndividualService key={service._id} allService={service}></IndividualService>
                                ))
                            }
                            <div className='text-center'>
                                {
                                    services.data.length > 6 && numberOfService === 6 ? <button onClick={() => { setNumberOfService(services.length) }} className='mt-10 bg-primary px-2 md:px-4 py-1 md:py-2 text-white font-bold hover:bg-red-700 duration-200'>Show More</button> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AllService;