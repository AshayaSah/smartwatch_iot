import React from "react";
import Heartrate from "./Heartrate";
import MapComponent from "./MapComponent";
import TimeComponent from "./TimeComponent";

const MainUi = () => {
  return (
    <div className="">
      <h1 className="text-4xl text-green-400 mb-5">Real-Time Sensor Data</h1>
      <Heartrate />
      <h1 className="text-4xl text-green-400 mt-10 mb-5">Real-Time GPS Data</h1>
      <MapComponent />
      <div className="mt-10">
        <TimeComponent />
      </div>
    </div>
  );
};

export default MainUi;
