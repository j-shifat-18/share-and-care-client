import React from "react";

const FoodCard = ({ food }) => {
  const { name, imageURL, location, quantity, _id, status } = food;
  return (
    <div key={_id} className="card bg-base-200 shadow-md">
      <figure>
        <img src={imageURL} alt={name} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>
          <div className="badge bg-pink-600 font-medium p-3">{status}</div>
        </div>
        <p>Quantity: {quantity}</p>
        <p>Pickup: {location}</p>
      </div>
    </div>
  );
};

export default FoodCard;
