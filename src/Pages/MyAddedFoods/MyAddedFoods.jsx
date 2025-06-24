import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import axios from "axios";
import FoodTableRow from "./foodTableRow";

const MyAddedFoods = () => {
  const [myFoods, setMyFoods] = useState([]);
  const { user } = use(AuthContext);
  const { uid } = user;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/foods?uid=${uid}`)
      .then((response) => {
        setMyFoods(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
              {myFoods.map((food) => <FoodTableRow key={food._id} food={food}></FoodTableRow> )}
              {myFoods.length === 0 && (
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
    </div>
  );
};

export default MyAddedFoods;
