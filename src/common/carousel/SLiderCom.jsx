import React from "react";
import "./style.scss";
import Slider from "react-slick";
import dayjs from "dayjs";
import fallBackThumnail from "../../assets/thumnail.png";
import { useNavigate } from "react-router-dom";
const SLiderCom = ({ textHeading, gameData, loading }) => {
  //   console.log(gameData);
  const navigate = useNavigate();
  const sliderset = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // console.log(gameData);
  return (
    <section className="slider">
      <div className="container-fluid">
        <h2 className="text-white"> {textHeading} </h2>
      </div>

      <Slider {...sliderset}>
        {gameData?.slice(2, 100).map((gamesitem, i) => {
          const thumbnail = gamesitem.thumbnail
            ? gamesitem.thumbnail
            : fallBackThumnail;
          return (
            <div
              className="game_container px-2"
              onClick={() => navigate(`/details/${gamesitem.id}`)}
              key={i}
            >
              <div className="game_img">
                {
                  <img
                    src={loading ? fallBackThumnail : thumbnail}
                    alt=""
                    className="img-fluid"
                  />
                }
              </div>
              <div className="game_text">
                <span className="d-block text-white">{gamesitem.title}</span>
                <span className="text-white">
                  {dayjs(gamesitem.release_date).format("MMM ,D,YYYY")}
                </span>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default SLiderCom;
