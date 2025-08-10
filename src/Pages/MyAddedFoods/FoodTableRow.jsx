import React from "react";

const FoodTableRow = ({ food, handleDelete, openModal }) => {
  return (
    <>
      <tr key={food._id}>
        <td className="flex items-center gap-2">
          <img
            className="w-8 h-8 object-cover rounded-lg"
            src={food.imageURL}
            alt=""
          />
          <p className="font-medium">{food.name}</p>
        </td>
        <td>{food.quantity}</td>
        <td>{food.location}</td>
        <td>{new Date(food.expireDate).toLocaleString()}</td>
        <td className="text-center">
          <span
            onClick={() => openModal(food)}
            className="btn bg-neutral hover:bg-white/20 hover:text-white  text-secondary rounded-xl font-bold text-sm mr-2"
          >
            Update
          </span>
          <span className="text-2xl">|</span>
          <span
            onClick={() => handleDelete(food._id)}
            className="btn bg-red-400 text-black hover:bg-red-600 hover:text-white  rounded-xl font-bold text-sm ml-2"
          >
            Delete
          </span>
        </td>
      </tr>
    </>
  );
};

export default FoodTableRow;
