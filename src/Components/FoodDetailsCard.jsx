import React, { use } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Loader from "./Loader";
import axios from "axios";
import Swal from "sweetalert2";

const FoodDetailsCard = () => {
  const { user } = use(AuthContext);
  const foodData = useLoaderData();
  const {
    _id,
    name,
    imageURL,
    expireDate,
    location,
    notes,
    quantity,
    status,
    donorName,
    donorPhotoURL,
    donorEmail,
  } = foodData;

  const convertedExpireDate = new Date(expireDate).toLocaleString();

  const handleFoodRequest = (id) => {
    const foodId = id;
    const requestName = user.displayName;
    const requestEmail = user.email;
    const uid = user.uid;
    const requestedAt = new Date();
    const requestInfo = { foodId, requestName, requestEmail, uid, requestedAt };
    axios
      .post("http://localhost:3000/foodRequest", requestInfo)
      .then((response) => {
        if (response.data.insertedId) {
          axios
            .patch(`http://localhost:3000/foods/${_id}`, {
              status: "Requested",
            })
            .then((response2) => {
              if (response2.data.modifiedCount) {
                Swal.fire({
                  title: "Request sent to donor!",
                  icon: "success",
                  draggable: true,
                });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Breadcrumb */}
        <div className="text-sm breadcrumbs text-gray-400">
          <ul>
            <li>
              <Link to="/availableFoods">Browse</Link>
            </li>
            <li>Food Details</li>
          </ul>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-sm text-gray-400">Posted by {user.displayName}</p>

        {/* Image */}
        <img
          src={imageURL}
          alt={name}
          className="rounded-lg h-[400px] w-full object-cover"
        />

        {/* Food Info Section */}
        <div className="mt-4 space-y-4">
          <h2 className="text-lg font-semibold border-b border-gray-600 pb-1">
            Food Information
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold">Quantity</p>
              <p>{quantity}</p>
            </div>
            <div>
              <p className="font-semibold">Pickup Location</p>
              <p>{location}</p>
            </div>
            <div>
              <p className="font-semibold">Expires On</p>
              <p>{convertedExpireDate}</p>
            </div>
            <div>
              <p className="font-semibold">Additional Notes</p>
              <p>{notes}</p>
            </div>
            <div>
              <p className="font-semibold">Status</p>
              <p className="badge bg-pink-600 font-medium">{status}</p>
            </div>
          </div>
        </div>

        {/* Donor Info */}
        <div className="mt-6 space-y-2">
          <h2 className="text-lg font-semibold border-b border-gray-600 pb-1">
            Donor Information
          </h2>
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={donorPhotoURL} alt={donorName} />
              </div>
            </div>
            <div>
              <p className="font-medium">{donorName}</p>
              <p className="text-sm text-gray-400">{donorEmail}</p>
            </div>
          </div>
        </div>

        {/* Request Button */}
        <div className="text-right">
          <button
            onClick={() => handleFoodRequest(_id)}
            className="btn bg-primary  text-secondary rounded-full px-6"
          >
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsCard;
