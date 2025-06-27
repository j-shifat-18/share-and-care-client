import React from "react";
import Banner from "../../Components/Banner";
import FeaturedFood from "./FeaturedFood/FeaturedFood";
import { useLoaderData } from "react-router";
import HowItWorks from "./HowItWorks/HowItWorks";
import CommunityImpact from "./CommunityImpact/CommunityImpact";

const Home = () => {
  const featuredFoods = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <FeaturedFood featuredFoods={featuredFoods}></FeaturedFood>
      <HowItWorks></HowItWorks>
      <CommunityImpact></CommunityImpact>
    </div>
  );
};

export default Home;
