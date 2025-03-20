import React from "react";
import AccGyro from "./AccGyro";
import Clock from "./Clock";
import { Card, CardContent } from "../ui/card";
import Heartrate from "./Heartrate";
import MapLiveLocation from "./MapLiveLocation";
import AlertButton from "./AlertButton";

const MainUi = () => {
  return (
    <div className="px-4 gap-4 max-w-[1200px] mx-auto flex flex-col min-h-[90vh]">
      <div className="w-full flex gap-4 min-h-[50%]">
        {/* First component - 70% width */}
        <div className="w-[70%]">
          <AccGyro />
        </div>

        {/* Second component - 30% width */}
        <div className="w-[30%]">
          <Clock />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-4">
        {/* First component - 50% width on large screens, 100% on medium and smaller */}
        <div className="h-full w-full md:w-[50%]">
          <MapLiveLocation />
        </div>

        {/* Second component - 50% width on large screens, 100% on medium and smaller */}
        <div className="min-h-[100%] w-full md:w-[50%] flex flex-col gap-4 mb-4">
          <Heartrate />
          <AlertButton />
        </div>
      </div>
    </div>
  );
};

export default MainUi;
