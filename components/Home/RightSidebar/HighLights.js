import React from "react";

function HighLights() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-white">
          <span className="text-2xl text-yellow-500">14</span>
          <hr className="border-1 border-yellow-500" />
          <span>MAR</span>
        </div>
        <div className="text-white text-left ml-5 mt-5">
          <h2 className="mb-2">ICC Womanes World Cup 2022</h2>
          <p className="text-slate-400">
            Pakisthan Womwn Vs Bangladesh Women[Mon Mar 14 2022]| Time - 04:00
            AM
          </p>
        </div>
      </div>
      <hr className="border-1 mt-2 border-slate-500" />
    </div>
  );
}

export default HighLights;
