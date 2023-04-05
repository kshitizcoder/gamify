import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SLiderCom from "../../../common/carousel/SLiderCom";
import { handleFetch } from "../../../store/gameSlice";
const Sports = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(handleFetch({ racingEndpoint: "games?category=racing" }));
  // }, []);
  const states = useSelector((state) => state.reducer);
  const sports = states.data.sports;
  const loading = states.isLoading;
  return (
    <>
      <SLiderCom
        loading={loading}
        gameData={sports}
        textHeading={"Sports Games"}
      />
    </>
  );
};

export default Sports;
