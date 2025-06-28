import React, { use, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import axios from "axios";
import FoodTableRow from "./foodTableRow";
import Swal from "sweetalert2";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { formatForDateTimeLocal } from "../../Utils/formatDate";
import useApplicationApi from "../../Hooks/useApplicationApi";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader";

const MyAddedFoods = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const { user } = use(AuthContext);
  const { myAddedFoodsPromise } = useApplicationApi();


  const { isPending, isError, data , error } = useQuery({
    queryKey: ['requestedFoodData'],
    queryFn: () => {
      return myAddedFoodsPromise(user.uid).then((res) =>
        res.data
      );
    },
  });

  if(isPending) return <Loader></Loader>;

  if(isError) return console.log('An error has occurred: ' + error.message);

  const openModal = (food) => {
    setSelectedFood(food);
    document.getElementById("my_modal_1").showModal();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const location = form.location.value;
    const imageURL = form.imageURL.value;
    const localExpireDate = form.expireDate.value;
    const expireDate = new Date(localExpireDate);
    const quantity = form.quantity.value;
    const notes = form.notes.value;
    const status = form.status.value;

    const newFoodData = {
      name,
      location,
      imageURL,
      expireDate,
      quantity,
      notes,
      status,
    };

    console.log(newFoodData);

    axios
      .patch(`https://share-and-care-server.vercel.app/foods/${selectedFood._id}`, newFoodData)
      .then((result) => {
        if (result.data.modifiedCount) {
          toast.success("Food Updated !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    document.getElementById("my_modal_1").close();
  };

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
          .delete(`https://share-and-care-server.vercel.app/foods/${id}`)
          .then((response) => {
            if (response.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your food has been removed.",
                icon: "success",
              });

              const newFoods = data.filter((food) => food._id !== id);
              data(newFoods);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">My Food Listings</h2>

        <div className="overflow-x-auto rounded-lg border border-base-300">
          <table className="table table-zebra w-full">
            <thead className="bg-base-200">
              <tr>
                <th>Food</th>
                <th>Quantity</th>
                <th>Pickup Location</th>
                <th>Expires On</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((food) => (
                <FoodTableRow
                  key={food._id}
                  food={food}
                  handleDelete={handleDelete}
                  openModal={openModal}
                ></FoodTableRow>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No listings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-[#141A1F]">
          <h3 className="font-bold text-lg">Update Food</h3>
          <form onSubmit={handleUpdate}>
            {/* Food Name */}
            <div className="mb-2">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                defaultValue={selectedFood?.name}
                name="name"
                placeholder="Enter food name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Image URL */}
            <div className="mb-2">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="url"
                defaultValue={selectedFood?.imageURL}
                name="imageURL"
                placeholder="Enter image URL"
                className="input input-bordered w-full"
              />
            </div>

            {/* Quantity */}
            <div className="mb-2">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                defaultValue={selectedFood?.quantity}
                placeholder="Enter quantity"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Pickup Location */}
            <div className="mb-2">
              <label className="label">
                <span className="label-text">Pickup Location</span>
              </label>
              <input
                type="text"
                defaultValue={selectedFood?.location}
                name="location"
                placeholder="Enter pickup location"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Expire Date/Time */}
            <div className="mb-2">
              <label className="label">
                <span className="label-text">Expire Date/Time</span>
              </label>
              <input
                type="datetime-local"
                name="expireDate"
                defaultValue={formatForDateTimeLocal(selectedFood?.expireDate)}
                className="input input-bordered w-full"
              />
            </div>
            {/* Food Status */}
            <div className="mb-2">
              <label className="label">
                <span className="label-text">Food Status</span>
              </label>
              <select
                defaultValue={selectedFood?.status}
                name="status"
                className="select w-full "
              >
                <option disabled={true}>Food Status</option>
                <option>Available</option>
                <option>Requested</option>
                <option>Unavailable</option>
              </select>
            </div>

            {/* Additional Notes */}
            <div className="mb-2">
              <label className="label">
                <span className="label-text">Additional Notes</span>
              </label>
              <textarea
                name="notes"
                defaultValue={selectedFood?.notes}
                className="textarea textarea-bordered w-full"
                rows="3"
                placeholder="Write any special instruction or note"
              ></textarea>
            </div>
            <div className="modal-action">
              <button
                type="button"
                className="btn bg-base-100"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                Cancel
              </button>
              <button type="submit" className="btn bg-primary text-secondary">
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MyAddedFoods;
