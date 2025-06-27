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
        <td>{food.expireDate}</td>
        <td className="text-center">
          <span
            onClick={() => openModal(food)}
            className="cursor-pointer text-primary mr-2"
          >
            Update
          </span>
          |
          <span
            onClick={() => handleDelete(food._id)}
            className="text-error cursor-pointer ml-2 font-semibold"
          >
            Delete
          </span>
        </td>
      </tr>
    </>
  );
};

export default FoodTableRow;
