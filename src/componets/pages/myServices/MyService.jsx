import React, { useContext } from 'react';
import { AuthContextInfo } from '../../../authProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';
import Loading from '../../../shared/Loading';
import MyServiceSingle from './MyServiceSingle';

const MyService = () => {
    const useAxiosSecure = useAxios();
    const { user } = useContext(AuthContextInfo)

    const { data: MyService, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["myAllservice"],
        queryFn: () => {
            return useAxiosSecure.get(`/my-services?email=${user?.email}`)
        }

    })

    // console.log(MyService?.data)
    if (isLoading) {
        return <Loading></Loading>
    }
    if (isError) {
        return <p>{error}</p>
    }
    return (
        <div className='container mx-auto'>
            <h2 className='text-center font-bold mt-2 text-xl'>My all Services</h2>
            <div className='container mx-auto grid gap-1 grid-cols-1'>
                {
                    MyService?.data.length <= 0 ? <h3>You do not have any services</h3> :
                        MyService?.data.map((items, idx) => <MyServiceSingle key={idx} refetch={refetch} MyServiceSingle={items}></MyServiceSingle>)

                }
            </div>
        </div>
    );
};

export default MyService;