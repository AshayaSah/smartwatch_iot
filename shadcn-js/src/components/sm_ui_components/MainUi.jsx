import React from "react";
import { motion } from "framer-motion";
import AccGyro from "./AccGyro";
import Clock from "./Clock";
import Heartrate from "./Heartrate";
import MapLiveLocation from "./MapLiveLocation";
import AlertButton from "./AlertButton";

const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 }, // Start off-screen to the left
  visible: { x: 0, opacity: 1 }, // Slide in to the original position
};

const slideInFromRight = {
  hidden: { x: 100, opacity: 0 }, // Start off-screen to the right
  visible: { x: 0, opacity: 1 }, // Slide in to the original position
};

const MainUi = () => {
  return (
    <div className="px-4 gap-4 max-w-[1200px] mx-auto flex flex-col min-h-[90vh]">
      <div className="w-full flex flex-col md:flex-row gap-4 min-h-[50%]">
        {/* First component - 70% width, slides in from left */}
        <motion.div
          className="w-full md:w-[70%]"
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft}
          transition={{ duration: 1 }}
        >
          <AccGyro />
        </motion.div>

        {/* Second component - 30% width, slides in from right */}
        <motion.div
          className="w-full md:w-[30%]"
          initial="hidden"
          animate="visible"
          variants={slideInFromRight}
          transition={{ duration: 1 }}
        >
          <Clock />
        </motion.div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-4">
        {/* First component - 50% width on large screens, 100% on medium and smaller, slides in from left */}
        <motion.div
          className="h-full w-full md:w-[50%]"
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft}
          transition={{ duration: 1 }}
        >
          <MapLiveLocation />
        </motion.div>

        {/* Second component - 50% width on large screens, 100% on medium and smaller, slides in from right */}
        <motion.div
          className="min-h-[100%] w-full md:w-[50%] flex flex-col gap-4 mb-4"
          initial="hidden"
          animate="visible"
          variants={slideInFromRight}
          transition={{ duration: 1 }}
        >
          <Heartrate />
          <AlertButton />
        </motion.div>
      </div>
    </div>
  );
};

export default MainUi;
