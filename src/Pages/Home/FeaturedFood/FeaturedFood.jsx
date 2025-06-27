import React from 'react';
import FeaturedFoodCard from './FeaturedFoodCard';
import { Link } from 'react-router';

const FeaturedFood = ({featuredFoods}) => {
    return (
        <div className='mb-12'>
            <h2 className='font-bold text-3xl mb-6'>Featured Foods</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
                {
                    featuredFoods.map(food=><FeaturedFoodCard food={food}></FeaturedFoodCard>)
                }
            </div>
            <div>
                <Link to="/availableFoods" className='btn bg-base-100 rounded-xl mt-4'>Show All</Link>
            </div>
        </div>
    );
};

export default FeaturedFood;