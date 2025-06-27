import React from 'react';
import { FaBoxOpen, FaSearch, FaComments } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="mx-auto px-4 py-10">
      <h2 className="font-bold text-lg text-white">How It Works</h2>
      <h1 className="text-3xl font-bold text-white mt-2 mb-4">
        Simple Steps to Share and Care
      </h1>
      <p className="text-gray-300 mb-6">
        Our platform makes it easy to share surplus food with your community. Follow these simple steps to get started.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#141A1F] border border-gray-700 rounded-lg p-5">
          <FaBoxOpen className="text-2xl text-primary mb-2" />
          <h3 className="font-bold mb-1 text-white">Share Your Surplus</h3>
          <p className="text-gray-400 text-sm">
            Easily list your surplus food items with a few taps. Specify quantity, type, and availability.
          </p>
        </div>
        <div className="bg-[#141A1F] border border-gray-700 rounded-lg p-5">
          <FaSearch className="text-2xl text-primary mb-2" />
          <h3 className="font-bold mb-1 text-white">Find Available Food</h3>
          <p className="text-gray-400 text-sm">
            Browse available food items in your community. Filter by category, distance, and dietary preferences.
          </p>
        </div>
        <div className="bg-[#141A1F] border border-gray-700 rounded-lg p-5">
          <FaComments className="text-2xl text-primary mb-2" />
          <h3 className="font-bold mb-1 text-white">Connect and Coordinate</h3>
          <p className="text-gray-400 text-sm">
            Use our messaging system to connect with neighbors, arrange pick-up or drop-off, and share food.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
