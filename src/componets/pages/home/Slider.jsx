import React from 'react';
import slider1 from "../../../assets/slider1.jpg"
import slider2 from "../../../assets/slider2.jpg"
import slider3 from "../../../assets/slider3.jpg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Slider = () => {
    return (
        <Carousel responsive={responsive} infinite className=''>
            <div className='bg-slate-200 relative flex rounded-lg'>
                <div className='absolute bg-primary opacity-80 text-white lg:max-w-[500px] top-full lg:top-[90%] -translate-y-full left-[10%] p-2 md:p-10 rounded-lg space-y-5 w-full'>
                    <h2 className="md:text-3xl font-bold">Where Little Stars Shine Bright</h2>
                    <p className='text-sm md:text-lg hidden sm:block'>Where Little Stars Shine Bright - Nurturing young minds to radiate their potential in a loving, safe, and inspiring environment. Your childs path to brilliance starts here.</p>
                    <button className='font-semibold text-sm md:text-xl bg-white text-primary sm:px-4 sm:py-2 rounded-full p-1'>Join the fall fun</button>
                </div>
                <img src={slider1} className='md:h-[550px] ml-auto rounded-r-lg' alt="" />
            </div>
            <div className='bg-slate-200 relative flex'>
                <div className='absolute bg-primary opacity-80 text-white lg:max-w-[500px] top-full lg:top-[90%] -translate-y-full left-[10%] p-2 md:p-10 rounded-lg space-y-5 w-full'>
                    <h2 className="md:text-3xl font-bold">Where Little Stars Shine Bright</h2>
                    <p className='text-sm md:text-lg hidden sm:block'>Where Little Stars Shine Bright - Nurturing young minds to radiate their potential in a loving, safe, and inspiring environment. Your childs path to brilliance starts here.</p>
                    <button className='font-semibold text-sm md:text-xl bg-white text-primary sm:px-4 sm:py-2 rounded-full'>Join the fall fun</button>
                </div>
                <img src={slider2} className='md:h-[550px] ml-auto rounded-r-lg' alt="" />
            </div>
            <div className='bg-slate-200 relative flex'>
                <div className='absolute bg-primary opacity-80 text-white lg:max-w-[500px] top-full lg:top-[90%] -translate-y-full left-[10%] p-2 md:p-10 rounded-lg space-y-5 w-full'>
                    <h2 className="md:text-3xl font-bold">Where Little Stars Shine Bright</h2>
                    <p className='text-sm md:text-lg hidden sm:block'>Where Little Stars Shine Bright - Nurturing young minds to radiate their potential in a loving, safe, and inspiring environment. Your childs path to brilliance starts here.</p>
                    <button className='font-semibold text-sm md:text-xl bg-white text-primary sm:px-4 sm:py-2 rounded-full'>Join the fall fun</button>
                </div>
                <img src={slider3} className='md:h-[550px] ml-auto rounded-r-lg' alt="" />
            </div>
        </Carousel>
    );
};

export default Slider;