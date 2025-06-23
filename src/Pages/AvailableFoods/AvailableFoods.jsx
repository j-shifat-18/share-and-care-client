import React, { useState } from "react";
import { useLoaderData } from "react-router";
import FoodCard from "../../Components/FoodCard";

const AvailableFoods = () => {
  const availableFoods = useLoaderData();
  console.log(availableFoods);

  const [searchText, setSearchText] = useState("");
  const [columns, setColumns] = useState(3);

//   const filteredItems = foodItems.filter((item) =>
//     item.name.toLowerCase().includes(searchText.toLowerCase())
//   );
  return (
    <div className="min-h-screen px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Top Controls */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search for food"
            className="input input-bordered w-full md:flex-1"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <select className="select select-bordered w-full md:w-52">
            <option>Sort by: Expiry Date</option>
            <option>Sort by: Quantity</option>
          </select>
        </div>

        {/* Column Toggle */}
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setColumns(3)}
            className={`btn w-32 ${
              columns === 3 ? "bg-primary text-secondary" : "bg-base-100 text-primary"
            }`}
          >
            3-column
          </button>
          <button
            onClick={() => setColumns(2)}
            className={`btn w-32 ${
              columns === 2 ? "bg-primary text-secondary" : "bg-base-100 text-primary"
            }`}
          >
            2-column
          </button>
        </div>

        {/* Grid Display */}
        <div
          className={`grid gap-6 ${
            columns === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {availableFoods.map((food) =><FoodCard food={food}></FoodCard>)}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center items-center gap-2">
          <button className="btn btn-sm btn-ghost">&lt;</button>
          <button className="btn btn-sm btn-active">1</button>
          <button className="btn btn-sm btn-ghost">2</button>
          <button className="btn btn-sm btn-ghost">3</button>
          <button className="btn btn-sm btn-ghost">4</button>
          <button className="btn btn-sm btn-ghost">5</button>
          <button className="btn btn-sm btn-ghost">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
