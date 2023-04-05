import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../store/api";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFailed, fetchInitiate, fetchGames } from "../store/gameSlice";
import { useDispatch, useSelector } from "react-redux";
const SearchResult = () => {
  const navigate = useNavigate();
  const { query } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const searchData = async () => {
      try {
        dispatch(fetchInitiate());
        const { data: serachData } = await axios.get(
          BASE_URL + `games?category=${query}`
        );

        dispatch(fetchGames({ search: serachData }));
      } catch (error) {
        dispatch(fetchFailed());
      }
    };
    searchData();
  }, [query]);

  const state = useSelector((state) => state.reducer);

  return (
    <section className="searchresult">
      <div className="container">
        <div className="row">
          {state?.data?.search?.map((games, i) => {
            return (
              <div
                onClick={() => navigate(`/details/${games.id}`)}
                className="col-md-3 gy-3"
                key={i}
              >
                <img src={games.thumbnail} alt="" className="img-fluid" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
