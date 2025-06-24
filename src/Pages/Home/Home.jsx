import React from "react";
import Banner from "../../Components/Banner";
import FeaturedFood from "./FeaturedFood/FeaturedFood";
import { useLoaderData } from "react-router";

const Home = () => {
  const featuredFoods = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <FeaturedFood featuredFoods={featuredFoods}></FeaturedFood>
    </div>
  );
};

export default Home;
