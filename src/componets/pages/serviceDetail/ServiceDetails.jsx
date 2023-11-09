import React, { } from 'react';
import { useLoaderData } from 'react-router-dom';
import { } from '@tanstack/react-query';
import Loading from '../../../shared/Loading';
import DetailSingle from './DetailSingle';
import HelmetProvider from '../../../shared/HelmetProvider';

const ServiceDetails = () => {
    const service = useLoaderData()
    if (!service.length) {
        return <Loading></Loading>
    }
    return (
        <>
            <HelmetProvider pagename="Service Detail"></HelmetProvider>
            <main className='py-10'>
                <div className='container mx-auto'>
                    <div className=''>
                        {
                            service.map((items, idx) => {
                                // setPageName(items.serviceName)
                                return <DetailSingle key={idx} singleDetailService={items} ></DetailSingle>
                            })
                        }
                    </div>
                </div>
            </main >
        </>
    );
};

export default ServiceDetails;
