import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import fallBackIMG from "../../../assets/game.jpg";
const Hero = () => {
  const { data } = useSelector((state) => state.reducer);

  return (
    <>
      <section className="hero">
        <div className="img_container">
          <img src={fallBackIMG} alt="" className="img-fluid" />
        </div>
       
          <div className="content_hero">
            <h1>
              Discover the best <span>free-to-play</span> games!
            </h1>
            <p>
              Millions of Moilbe Pc and Browser games to discover. Explore now.
            </p>
          </div>
          <div className="hero_overlay"></div>
      
      </section>
    </>
  );
};

export default Hero;
