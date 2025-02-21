import React, { useEffect, useRef, useState } from "react";
import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { io } from "socket.io-client"; // Updated import for socket.io-client

const Heartrate = () => {
  const [data, setData] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    // Connect to the WebSocket server
    socketRef.current = io("http://localhost:3000", {
      withCredentials: true, // Include credentials if needed
    });

    // Log connection status
    socketRef.current.on("connect", () => {
      console.log("Connected to the server");
    });

    // Listen for heart rate data from the server
    socketRef.current.on("heart_rate", (sensorValue) => {
      console.log("Received heart rate data:", sensorValue); // Log the received data

      // Update the state with the new heart rate value
      setData((prevData) => {
        const newData = [
          ...prevData,
          { id: prevData.length + 1, value: sensorValue.value },
        ];

        // Limit the array to the latest 60 values
        if (newData.length > 60) {
          newData.splice(0, newData.length - 60); // Remove the oldest values
        }

        console.log("Updated data:", newData); // Log the updated data
        return newData;
      });
    });

    // Log disconnection status
    socketRef.current.on("disconnect", () => {
      console.log("Disconnected from the server");
    });

    // Cleanup on component unmount
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Heartrate;
