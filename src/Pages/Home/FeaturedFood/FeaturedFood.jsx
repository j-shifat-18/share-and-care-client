import React from 'react';
import FeaturedFoodCard from './FeaturedFoodCard';

const FeaturedFood = () => {
    return (
        <div>
            <h2 className='font-bold text-3xl mb-6'>Featured Foods</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
                <FeaturedFoodCard></FeaturedFoodCard>
                <FeaturedFoodCard></FeaturedFoodCard>
                <FeaturedFoodCard></FeaturedFoodCard>
                <FeaturedFoodCard></FeaturedFoodCard>
                <FeaturedFoodCard></FeaturedFoodCard>
                <FeaturedFoodCard></FeaturedFoodCard>
            </div>
        </div>
    );
};

export default FeaturedFood;