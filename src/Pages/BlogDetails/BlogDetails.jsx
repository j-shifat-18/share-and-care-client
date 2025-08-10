import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router";
import Loader from "../../Components/Loader";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const BlogDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: blog, isLoading } = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/blogs/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (!blog) {
    return <div className="text-center text-red-500 py-20">Blog not found</div>;
  }
  return (
    <div className="min-h-screen bg-[#141A1F] text-primary py-12 px-6 md:px-20">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[400px] object-cover rounded-xl mb-6 border border-[#9EADBF]"
      />
      <p className="text-neutral mb-2">
        {new Date(blog.date).toLocaleDateString()} • {blog.author || "Admin"}
      </p>
      <h1 className="text-3xl font-bold text-accent mb-6">{blog.title}</h1>
      <p className="text-neutral text-lg leading-relaxed whitespace-pre-line">
        {blog.content}
      </p>

      <Link to="/blogs" className="text-accent hover:underline block mt-8">
        ← Back to Blogs
      </Link>
    </div>
  );
};

export default BlogDetails;
