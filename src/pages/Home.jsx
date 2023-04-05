import React from "react";
import Fantasy from "../components/home/fantasy/Fantasy";
import Hero from "../components/home/hero/Hero";
import Racing from "../components/home/racing/Racing";
import Sports from "../components/home/sports/Sports";
import Shooter from "../components/shooter/Shooter";

const Home = () => {
  return (
    <>
    <Hero/>
      <Shooter />
      <Racing/>
      <Fantasy/>
      <Sports/>
    </>
  );
};

export default Home;
