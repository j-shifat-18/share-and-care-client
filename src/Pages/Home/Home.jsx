import React from "react";
import Banner from "../../Components/Banner";
import FeaturedFood from "./FeaturedFood/FeaturedFood";
import { useLoaderData } from "react-router";
import HowItWorks from "./HowItWorks/HowItWorks";
import CommunityImpact from "./CommunityImpact/CommunityImpact";
import VoicesOfCare from "./VoicesOfCare/VoicesOfCare";

const Home = () => {
  const featuredFoods = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <FeaturedFood featuredFoods={featuredFoods}></FeaturedFood>
      <HowItWorks></HowItWorks>
      <CommunityImpact></CommunityImpact>\
      <VoicesOfCare></VoicesOfCare>
    </div>
  );
};

export default Home;
