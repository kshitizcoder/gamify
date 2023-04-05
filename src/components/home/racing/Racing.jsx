import React from "react";
import { useEffect } from "react";
import { handleFetch } from "../../../store/gameSlice";
import { useDispatch, useSelector } from "react-redux";
import SLiderCom from "../../../common/carousel/SLiderCom";
import "./style.scss";
const Racing = () => {
  const { data } = useSelector((state) => state.reducer);
  const racing = data.racing;
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(handleFetch({ racingEndpoint: "games?category=racing" }));
  // }, []);
  // console.log(racing);
  return (
    <>
      <div className="racing">
        <SLiderCom textHeading={"Racing Games"} gameData={racing} />
      </div>
    </>
  );
};

export default Racing;
