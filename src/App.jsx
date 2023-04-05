import { createAsyncThunk } from "@reduxjs/toolkit";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchInitiate, fetchSuccess } from "./store/gameSlice";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./store/api";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer";
import Details from "./pages/Details";
import Explore from "./pages/Explore";
export default function App() {
  const dispatch = useDispatch();

  const handleFetch = createAsyncThunk("games", async (thunkAPI) => {
    try {
      dispatch(fetchInitiate());
      let { data: shooterData } = await axios.get(
        BASE_URL + "games?category=shooter"
      );
      let { data: racingData } = await axios.get(
        BASE_URL + "games?category=racing"
      );
      let { data: fantasyData } = await axios.get(
        BASE_URL + "games?category=fantasy"
      );
      let { data: sportsData } = await axios.get(
        BASE_URL + "games?category=sports"
      );
      let { data: gamesData } = await axios.get(BASE_URL + "games");
      // setData({ shooter: shooterData, racing: racingData,fantacy:fantasyData,sports:sportsData });
      dispatch(
        fetchSuccess({
          shooter: shooterData,
          racing: racingData,
          fantasy: fantasyData,
          sports: sportsData,
          games: gamesData,
        })
      );
    } catch (error) {
      console.log(error);
    }
  });

  const { isLoading, data } = useSelector((state) => state.reducer);
  useEffect(() => {
    dispatch(handleFetch());
  }, []);
  // console.log(data);
  // const gameData = useSelector((state) => state.reducer);
  // console.log(gameData);
  // if (isLoading) {
  //   <h1>Loading . . .</h1>;
  // }
  return (
    <>
      <Navbar />
      {/* {isLoading ? (
        <h1 className="text-white">Loading</h1>
      ) : ( */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchresult/:query" element={<SearchResult />} />
        <Route path="/search" element={<Search />} />
        <Route path="/explore/:type" element={<Explore />} />

        <Route path="/details/:id" element={<Details />} />
      </Routes>
      {/* )} */}

      <Footer />
    </>
  );
}
