import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import Loader from '../../Components/Loader';

const AddFood = () => {
    const {user} = use(AuthContext);

    if(!user){
        return <Loader></Loader>;
    }

    console.log(user);

    const handleAddFood = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const imageURL = form.imageURL.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const expireDate = form.expireDate.value;
        const notes = form.notes.value;
        const status = form.status.value;

        console.log(name , imageURL , quantity , location , expireDate , notes , status);
    }
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
          <input
            type="text"
            name="status"
            placeholder="e.g. Available, Reserved"
            className="input input-bordered w-full"
          />
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
          <button className="btn bg-primary text-secondary px-6 rounded-full">Add Food</button>
        </div>
      </form>
    </div>
    );
};

export default AddFood;