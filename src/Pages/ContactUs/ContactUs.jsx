import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-[#141A1F] text-primary py-16 px-4 md:px-12 lg:px-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold ">Contact Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-neutral">
          We’re here to connect with you! Reach us anytime through the details below.
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <div className="grid sm:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#2B3640] p-6 rounded-xl text-center shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="p-4 bg-[#141A1F] w-fit mx-auto rounded-full text-accent mb-4">
            <FaEnvelope size={28} />
          </div>
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="text-neutral mt-1">info@shareandcare.com</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#2B3640] p-6 rounded-xl text-center shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="p-4 bg-[#141A1F] w-fit mx-auto rounded-full text-accent mb-4">
            <FaPhoneAlt size={28} />
          </div>
          <h3 className="text-lg font-semibold">Phone</h3>
          <p className="text-neutral mt-1">+880 123 456 789</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#2B3640] p-6 rounded-xl text-center shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="p-4 bg-[#141A1F] w-fit mx-auto rounded-full text-accent mb-4">
            <FaMapMarkerAlt size={28} />
          </div>
          <h3 className="text-lg font-semibold">Address</h3>
          <p className="text-neutral mt-1">Dhaka, Bangladesh</p>
        </motion.div>
      </div>

      {/* Map Embed */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 rounded-xl overflow-hidden shadow-lg border border-[#2B3640]"
      >
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7862294686244!2d90.40651057441038!3d23.789585987193654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71f14a19c9d%3A0xf0d7f9c7f4b7d9d0!2sDhaka%20Bangladesh!5e0!3m2!1sen!2sbd!4v1692345678901!5m2!1sen!2sbd"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ContactUs;
