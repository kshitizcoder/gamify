import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SLiderCom from "../../common/carousel/SLiderCom";

const Shooter = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer);
  const shooter = state.data.shooter;
  const loading = state.isloading;

  return (
    <>
      <div className="shooter">
        <SLiderCom
          loading={loading}
          gameData={shooter}
          textHeading={"Shooter Games"}
        />
      </div>
    </>
  );
};

export default Shooter;
