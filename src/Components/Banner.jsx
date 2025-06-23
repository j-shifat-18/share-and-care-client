import React from 'react';
import bannerImg from '../assets/banner-img.png'

const Banner = () => {
    return (
        <div className='mt-5 mb-10'>
            <div className='h-[300px] md:h-[400px] lg:h-[550px] rounded-xl bg-cover bg-center flex flex-col items-center justify-center text-primary ' style={{ backgroundImage: `url(${bannerImg})` }}>
                <h2 className='font-black text-2xl md:text-3xl lg:text-5xl text-primary text-center'>Share Surplus, Nourish Communities</h2>
                <p className='text-xs md:text-base w-4/5 lg:w-3/5 text-center mt-2'>
                    Connect with neighbors to share surplus food, reduce waste, and support those in need. Join our community today!
                </p>
                <button className='btn rounded-xl font-bold px-5 py-3 bg-neutral text-secondary mt-8'>Get Started</button>
            </div>
        </div>
    );
};

export default Banner;