import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Components/Loader";

const Blogs = () => {
    const axiosSecure = useAxiosSecure();
  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosSecure.get("/blogs");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="min-h-screen bg-[#141A1F] text-primary py-12 px-6 md:px-20">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Our Blogs
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <motion.div
            key={blog._id}
            whileHover={{ scale: 1.05 }}
            className="bg-[#2B3640] rounded-xl shadow-lg overflow-hidden border border-[#9EADBF]"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-primary">
                {blog.title}
              </h2>
              <p className="text-neutral mt-2">
                {blog.content.slice(0, 80)}...
              </p>
              <Link
                to={`/blogs/${blog._id}`}
                className="mt-4 inline-block text-accent hover:underline font-medium"
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
