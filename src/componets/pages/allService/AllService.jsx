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
    const [search, setSearch] = useState("")
    const [filterdData, setfiltedData] = useState([])
    const { data: services, isError, error, isLoading } = useQuery({
        queryKey: ["allServices"],
        queryFn: () => {
            return useAxiosSecure.get("/all-service")
        }
    })
    // console.log(services.data)
    const categories = []
    if (!isLoading) {
        services?.data?.map(items => {
            categories.push(items.category)
        })
    }
    const uniqCate = [... new Set(categories)]
    const handleChange = e => {
        const filteredcategory = (e.target.value)
        if (filteredcategory == "All") {
            setfiltedData(services?.data)
        }
        setfiltedData(services.data.filter(items => items.category.toLowerCase() === filteredcategory.toLocaleLowerCase()))
    }
    // handle search over here
    const handleSearch = (e) => {
        setSearch(e.target.value)

        setfiltedData(services.data.filter(data => data.serviceName.toLowerCase().includes(search.toLowerCase())))
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    if (isError) {
        <p className='text-center'>{error}</p>
    }
    return (
        <>
            <HelmetProvider pagename="All Services"></HelmetProvider>
            <main className='pb-20 pt-8 bg-slate-100'>
                <div className='container mx-auto'>
                    <h1 className='text-xl text-center font-bold md:text-3xl capitalize' >all Service</h1>
                    <div className="py-10">
                        <div className='md:max-w-[900px] mx-auto'>
                            <div className='flex justify-between items-start sm:flex-row flex-col gap-5 px-4 sm:items-center mb-2'>
                                <div className='border border-slate-200 p-4 w-full sm:w-auto mr-3 rounded-md hidden sm:block'>
                                    <p className='capitalize font-semibold text-xs md:text-base'>Search By Service Name</p>
                                    <input type="text" placeholder="Service Name" className='w-full bg-slate-200 rounded-md p-1 px-2 outline-0' onChange={handleSearch} />
                                </div>
                                <div className='border border-slate-200 p-4 w-full sm:w-auto mr-3 rounded-md'>
                                    <p className='capitalize font-semibold text-xs md:text-base'>Filter By Category</p>
                                    <select name="filterValue" id="" onChange={handleChange} className='focus:outline-slate-200 w-full'>
                                        <option defaultValue="All">All</option>
                                        {uniqCate.map((items, idx) => <option key={idx} value={items}>{items}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className='space-y-7'>
                                {
                                    filterdData.length > 0 ? filterdData.slice(0, numberOfService).map((service, ids) => (
                                        <IndividualService key={ids} allService={service}></IndividualService>
                                    )) :
                                        services?.data?.slice(0, numberOfService).map((service, ids) => (
                                            <IndividualService key={ids} allService={service}></IndividualService>
                                        ))
                                }
                            </div>
                            <div className='text-center'>
                                {
                                    // filterdData.length > 6 ? <button onClick={() => { setNumberOfService(services.length) }} className='mt-10 bg-primary px-2 md:px-4 py-1 md:py-2 text-white font-bold hover:bg-red-700 duration-200'>Show More</button>
                                    //     :
                                    services?.data?.length > 6 && numberOfService == 6 ? <button onClick={() => { setNumberOfService(services.length) }} className='mt-10 bg-primary px-2 md:px-4 py-1 md:py-2 text-white font-bold hover:bg-red-700 duration-200'>Show More</button> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    );
};

export default AllService;