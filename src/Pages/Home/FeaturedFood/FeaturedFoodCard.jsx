import React from 'react';
import featuredFoodImg from '../../../assets/FeaturedFood.png'

const FeaturedFoodCard = () => {
    return (
        <div className='pb-3 '>
            <div className='mb-3'>
                <img className='' src={featuredFoodImg} alt="" />
            </div>
            <p className='font-medium text-primary'>Fresh Apples</p>
            <p className='text-accent'>Available: 5 lbs</p>
        </div>
    );
};

export default FeaturedFoodCard;