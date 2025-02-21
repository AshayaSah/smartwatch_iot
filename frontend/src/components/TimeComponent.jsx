import React, { useEffect, useState } from "react";

const TimeComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return <div className="text-white text-2xl">{time.toLocaleTimeString()}</div>;
};

export default TimeComponent;
