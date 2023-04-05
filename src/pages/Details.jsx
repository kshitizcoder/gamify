import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../store/api";
import { fetchFailed, fetchInitiate, fetchGames } from "../store/gameSlice";
import "../common/css/details.scss";
import dayjs from "dayjs";
const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const getGamesDetails = async () => {
      try {
        dispatch(fetchInitiate());
        const { data: detailsData } = await axios.get(
          BASE_URL + `game?id=${id}`
        );

        dispatch(fetchGames({ details: detailsData }));
        // console.log(data);
      } catch (error) {
        dispatch(fetchFailed());
      }
    };

    getGamesDetails();
  }, [id, dispatch]);

  const { data } = useSelector((state) => state.reducer);

  const detailsData = data?.details;

  return (
    <section className="details">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-lg-4 details-left">
            <div className="detailsThumnail">
              <img
                src={data?.details?.thumbnail}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="buttons mt-2">
              <button className="freebtn me-3">Free</button>
              <NavLink
                className={"playnowbtn btn "}
                to={data?.details?.game_url}
              >
                PLAY NOW
              </NavLink>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 details-right">
            <div className="details">
              <strong className="text-white">
                Game : <span className="ms-2">{detailsData?.title}</span>
              </strong>
              <p className="text-white mt-3">About {detailsData?.title}</p>
              <p className="text-white">{detailsData?.short_description}</p>
            </div>
            <p className="text-white fw-bold">Additional Information :</p>
            <div className="additionalinfo d-flex  flex-wrap justify-content-between">
              <div className="addinfowrapper">
                <div className="addinfoitem">
                  <span className="text-white d-block">Title</span>
                  <span className="text-white">{detailsData?.title}</span>
                </div>
                <div className="addinfoitem mt-2">
                  <span className="text-white d-block">Release Date</span>
                  <span className="text-white">
                    {dayjs(detailsData?.release_date).format("MMM,D YYYY")}
                  </span>
                </div>
              </div>

              <div className="addinfowrapper">
                <div className="addinfoitem">
                  <span className="text-white d-block">Publisher</span>
                  <span className="text-white">{detailsData?.publisher}</span>
                </div>
                <div className="addinfoitem mt-2">
                  <span className="text-white d-block">Platform</span>
                  <span className="text-white">{detailsData?.platform}</span>
                </div>
              </div>

              <div className="addinfowrapper">
                <div className="addinfoitem">
                  <span className="text-white d-block">Developer</span>
                  <span className="text-white">{detailsData?.developer}</span>
                </div>
                <div className="addinfoitem mt-2">
                  <span className="text-white d-block">Genre</span>
                  <span className="text-white">{detailsData?.genre}</span>
                </div>
              </div>
            </div>
            <p className="text-white mt-4">{detailsData?.title} Screenshots</p>
            <div className="screentshot mt-4 d-flex justify-content-between">
              {detailsData?.screenshots?.map((screnshot, i) => {
                return (
                  <div className="screenshots ms-2" key={i}>
                    <img
                      src={screnshot.image}
                      alt="games"
                      className="img-fluid"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
