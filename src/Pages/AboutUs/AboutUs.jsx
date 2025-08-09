import React from "react";
import { motion } from "framer-motion";
import foodShareImg from '../../assets/banner-2-resized.jpg'

const AboutUs = () => {
  return (
     <div className=" text-primary py-16 px-4 md:px-12 lg:px-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold ">About Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-neutral">
          Share and Care is a community-driven platform dedicated to reducing food waste
          and connecting people through the act of sharing. Whether you have surplus food
          or are in need, our mission is to make sharing simple, safe, and impactful.
        </p>
      </motion.div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-accent mb-4">Our Mission</h2>
          <p className="text-neutral leading-relaxed">
            We believe that no food should go to waste while people go hungry.
            Share and Care empowers individuals to share surplus meals, connect
            with neighbors, and foster kindness. Together, we’re building a
            stronger, more compassionate community—one plate at a time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={foodShareImg}
            alt="Food Sharing"
            className="rounded-2xl shadow-lg border border-accent w-full max-w-sm"
          />
        </motion.div>
      </div>

      {/* Impact Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
      >
        <div className="bg-[#2B3640] rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-bold text-accent">500+</h3>
          <p className="text-neutral mt-2">Meals Shared</p>
        </div>
        <div className="bg-[#2B3640] rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-bold text-accent">300+</h3>
          <p className="text-neutral mt-2">Happy Families</p>
        </div>
        <div className="bg-[#2B3640] rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-bold text-accent">50+</h3>
          <p className="text-neutral mt-2">Active Volunteers</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
