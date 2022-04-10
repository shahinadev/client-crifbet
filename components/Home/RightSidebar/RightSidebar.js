import { Divider } from "@mui/material";
import React from "react";
import HighLights from "./HighLights";

const RightSidebar = () => {
  return (
    <div className="bg-slate-800 py-5 px-3">
      <h1 className="transform-uppercase text-white text-2xl text-left">
        Highlights
      </h1>
      {/* Highlights */}
      {[...Array(3).keys()].map((index) => (
        <HighLights key={index} />
      ))}
    </div>
  );
};

export default RightSidebar;
