import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const FoodTableRow = ({ food }) => {

  const handleUpdate = () => {};

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/foods/${id}`)
          .then((response) => {
            if (response.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your food has been removed.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  return (
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
          onClick={() => handleUpdate(food._id)}
          className="text-primary cursor-pointer mr-2 font-semibold"
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
  );
};

export default FoodTableRow;
