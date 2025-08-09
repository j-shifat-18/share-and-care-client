import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const blogPosts = [
  {
    id: 1,
    title: "Reducing Food Waste: Simple Steps You Can Take",
    description:
      "Discover easy ways to reduce food waste in your home and community...",
    image: "https://source.unsplash.com/800x500/?food,reduce",
    date: "August 5, 2025",
    author: "Admin",
  },
  {
    id: 2,
    title: "How Sharing Food Brings Communities Together",
    description:
      "Food has the power to unite people, break barriers, and build trust...",
    image: "https://source.unsplash.com/800x500/?food,sharing",
    date: "July 29, 2025",
    author: "Admin",
  },
  {
    id: 3,
    title: "Nutritional Benefits of Freshly Cooked Meals",
    description:
      "Explore why freshly cooked meals are healthier and more nutritious...",
    image: "https://source.unsplash.com/800x500/?healthy,food",
    date: "July 20, 2025",
    author: "Admin",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 md:px-16">
      <motion.h1
        className="text-4xl font-bold text-primary text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Blogs
      </motion.h1>

      <div className="grid gap-8 md:grid-cols-3">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-[#2B3640] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-[#9EADBF]"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-2">
                {post.date} • {post.author}
              </p>
              <h2 className="text-xl text-primary font-semibold mb-3">
                {post.title}
              </h2>
              <p className="text-neutral mb-4">{post.description}</p>
              <Link
                to={`/blogs/${post.id}`}
                className="text-accent hover:underline font-medium"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
