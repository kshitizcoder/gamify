import React from "react";
import "../common/css/search.scss";
import { useSelector } from "react-redux";
import SearchBar from "../common/searchBar/SearchBar";
import fallBackThumbnail from "../assets/thumnail.png";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.reducer);
  return (
    <section className="search">
      <div className="container-fluid">
        <div className="row">
          <div className="search_container ">
            <SearchBar />
          </div>
          <div className="games d-flex justify-content-center row mt-5">
            {data?.games?.map((games, i) => {
              return (
                <div
                  onClick={() => navigate(`/details/${games.id}`)}
                  className=" col-sm-6 col-lg-3 gy-3 d-flex justify-content-center"
                  key={i}
                >
                  <img
                    src={games.thumbnail ? games.thumbnail : fallBackThumbnail}
                    alt="games"
                    className="img-fluid"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
