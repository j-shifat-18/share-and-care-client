import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react"


import banner1 from "../assets/banner-img.png";
import banner2 from "../assets/banner-2-resized.jpg";
import banner3 from "../assets/banner-3-resized.jpg";
import { Link } from "react-router";

const backgroundImages = [banner1, banner2, banner3]; 

const Banner = () => {
  const [index, setIndex] = useState(0);

  // Rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mb-10 h-[300px] md:h-[400px] lg:h-[550px] rounded-xl overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImages[index]})`,
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0000001a]  z-10 flex flex-col items-center justify-center text-primary text-center px-4">
        <h2 className="font-black text-2xl md:text-3xl lg:text-5xl text-primary drop-shadow-lg">
          Share Surplus, Nourish Communities
        </h2>
        <p className="text-xs md:text-base w-4/5 lg:w-3/5 mt-2 text-white drop-shadow">
          Connect with neighbors to share surplus food, reduce waste, and support those in need. Join our community today!
        </p>
        <Link
          to="/availableFoods"
          className="btn rounded-xl font-bold px-5 py-3 bg-neutral text-secondary mt-8"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Banner;
