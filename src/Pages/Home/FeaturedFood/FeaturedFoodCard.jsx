import React from 'react';
import { Link } from 'react-router';

const FeaturedFoodCard = ({food}) => {
    return (
        <Link to={`/availableFoods/${food._id}`} className='pb-3 '>
            <div className='mb-3'>
                <img className='w-[180px] h-[180px] object-cover rounded-xl' src={food.imageURL} alt="" />
            </div>
            <p className='font-medium text-primary'>{food.name}</p>
            <p className='text-accent'>Quantity: {food.quantity}</p>
        </Link>
    );
};

export default FeaturedFoodCard;