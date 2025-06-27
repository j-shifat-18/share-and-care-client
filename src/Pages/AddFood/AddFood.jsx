import React, { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Loader from "../../Components/Loader";
import axios from "axios";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = use(AuthContext);

  if (!user) {
    return <Loader></Loader>;
  }

  console.log(user);

  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imageURL = form.imageURL.value;
    const quantity = form.quantity.value;
    const location = form.location.value;
    const expireDate = form.expireDate.value;
    const notes = form.notes.value;
    const status = form.status.value;
    const donorName = user.displayName;
    const donorEmail = user.email;
    const donorPhotoURL = user.photoURL;
    const uid = user.uid;
    

    const newFoodData = {
      name,
      imageURL,
      quantity,
      location,
      expireDate,
      notes,
      status,
      donorName,
      donorEmail,
      donorPhotoURL,
      uid

    };

    axios
      .post("http://localhost:3000/foods", newFoodData)
      .then((response) => {
        if (response.data.insertedId) {
          Swal.fire({
            title: "Thanks for sharing Love!",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-start pt-10 px-4">
      <form
        onSubmit={handleAddFood}
        className="w-full max-w-2xl p-8 rounded-lg "
      >
        <h2 className="text-2xl font-bold mb-6">Add Food Item</h2>

        {/* Food Name */}
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Food Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter food name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="url"
            name="imageURL"
            placeholder="Enter image URL"
            className="input input-bordered w-full"
          />
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="text"
            name="quantity"
            placeholder="Enter quantity"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Pickup Location */}
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Pickup Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter pickup location"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Expire Date/Time */}
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Expire Date/Time</span>
          </label>
          <input
            type="datetime-local"
            name="expireDate"
            className="input input-bordered w-full"
          />
        </div>

        {/* Food Status */}
        <div className="mb-6">
          <label className="label">
            <span className="label-text">Food Status</span>
          </label>
          <select defaultValue="Pick a color" name="status" className="select w-full ">
              <option disabled={true}>Food Status</option>
              <option >Available</option>
              <option >Requested</option>
              <option >Unavailable</option>
            </select>
        </div>

        {/* Additional Notes */}
        <div className="mb-6">
          <label className="label">
            <span className="label-text">Additional Notes</span>
          </label>
          <textarea
            name="notes"
            className="textarea textarea-bordered w-full"
            rows="3"
            placeholder="Write any special instruction or note"
          ></textarea>
        </div>

        {/* Donor Details (static for now) */}
        <div className="mb-6">
          <p className="text-sm font-semibold mb-2">Donor Details</p>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="Donor Avatar" />
              </div>
            </div>
            <div>
              <p className="text-base font-medium">{user.displayName}</p>
              <p className="text-sm text-gray-400">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button className="btn bg-primary text-secondary px-6 rounded-full">
            Add Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
