import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../common/searchBar/SearchBar";
import axios from "axios";
import "../common/css/explore.scss";
import { BASE_URL } from "../store/api";
import { useNavigate, useParams } from "react-router-dom";
import { fetchGames, fetchInitiate, fetchFailed } from "../store/gameSlice";
import dayjs from "dayjs";
import fasllbackThumbanil from "../assets/thumnail.png";
const Explore = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.reducer);

  const newdata = state.data.platform;
  // console.log(newdata);
  const [category, setCategory] = useState("strategy");
  const [sortBy, setSortBy] = useState("alphabetical");
  useEffect(() => {
    const getPlatformGames = async () => {
      try {
        dispatch(fetchInitiate());
        const { data: platformData } = await axios.get(
          BASE_URL + `filter?tag=${category}&platform=${type}&sort-by=${sortBy}`
        );
        dispatch(fetchGames({ platform: platformData }));
      } catch (error) {
        dispatch(fetchFailed());
      }
    };
    getPlatformGames();
  }, [category, sortBy, type]);

  return (
    <section className="explore">
      <div className="conatiner">
        <div className="row ">
          {/* <div className="search_section">
          
       <SearchBar/>
        </div> */}
          <div className="filter_warpper align-items-center">
            <h2 className="text-white px-4">{type.toUpperCase()} GAMES</h2>
            <div className="filter ">
              <select
                id="category"
                className="me-3"
                onChange={(e) => setCategory(e.target.value)}
                onSelect={(e) => setCategory(e.target.value)}
              >
                <option>Select Category</option>
                <option value="mmorpg">Mmorpg</option>
                <option value="sports">sports</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="social">Social</option>
                <option value="racing">Racing</option>
              </select>
              <select id="sortby" onChange={(e) => setSortBy(e.target.value)}>
                <option>Sort By</option>
                <option value="release-date">Release-Date</option>
                <option value="popularity">Popularity</option>
                <option value="alphabetical ">Alphabetical</option>
                <option value="relevance">Relevance</option>
              </select>
            </div>
          </div>
          <div className="games_list mt-5 container">
            <div className="row game_wrapper">
              {newdata?.map((games, i) => {
                const thumbnail = games.thumbnail
                  ? games.thumbnail
                  : fasllbackThumbanil;
                return (
                  <div
                    className="platform_container col-sm-6 col-lg-3 gy-1 px-4"
                    key={i}
                  >
                    <div
                      className="thumail_platform d-flex justify-content-center"
                      onClick={() => navigate(`/details/${games.id}`)}
                    >
                      <img src={thumbnail} alt="games" className="img-fluid" />
                    </div>
                    <div className="patform_dec p-3 text-center">
                      <span className="d-block text-white">{games.title}</span>
                      <span className="text-white ">
                        {dayjs(games.release_date).format("MMM ,D,YYYY")}
                      </span>
                    </div>
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

export default Explore;
