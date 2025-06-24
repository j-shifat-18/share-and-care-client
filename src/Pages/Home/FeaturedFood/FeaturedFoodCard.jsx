import React from 'react';

const FeaturedFoodCard = ({food}) => {
    return (
        <div className='pb-3 '>
            <div className='mb-3'>
                <img className='w-[180px] h-[180px] object-cover rounded-xl' src={food.imageURL} alt="" />
            </div>
            <p className='font-medium text-primary'>{food.name}</p>
            <p className='text-accent'>Quantity: {food.quantity}</p>
        </div>
    );
};

export default FeaturedFoodCard;