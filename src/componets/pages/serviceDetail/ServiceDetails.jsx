import React from 'react';
// import HelmetProvider from '../../../shared/HelmetProvider';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';
import Loading from '../../../shared/Loading';
import DetailSingle from './DetailSingle';

const ServiceDetails = () => {
    const useAxiosSecure = useAxios()
    const id = useParams().id;

    const { data: service, isLoading, error, isError } = useQuery({
        queryKey: ["specificService"],
        queryFn: () => {
            return useAxiosSecure.get(`/service/${id}`)
        }
    })


    // destructur data from object




    if (isLoading) {
        return <Loading></Loading>
    }
    if (isError) {
        return <p>{error}</p>
    }
    return (
        <>
            <main className='py-10'>
                <div className='container mx-auto'>
                    <div className=''>
                        {
                            service.data.map(items => (
                                <DetailSingle key={items._id} singleDetailService={items}></DetailSingle>
                            ))
                        }
                    </div>
                </div>
            </main>
        </>
    );
};

export default ServiceDetails;
