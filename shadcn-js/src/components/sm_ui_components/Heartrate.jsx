"use client";

import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LineChart, Line, YAxis, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const Heartrate = () => {
  const [data, setData] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io("http://localhost:3000", {
      withCredentials: true,
    });

    socketRef.current.on("connect", () => {
      console.log("Connected to the server");
    });

    socketRef.current.on("heart_rate", (sensorValue) => {
      // setData((prevData) => {
      //   const newData = [
      //     ...prevData,
      //     { id: prevData.length + 1, value: sensorValue.value },
      //   ];
      //   if (newData.length > 60) {
      //     newData.splice(0, newData.length - 60);
      //   }
      //   return newData;
      // });
      setData((prevData) => {
        const nextId =
          prevData.length > 0 ? (prevData[prevData.length - 1].id + 1) % 60 : 0;

        const newData = [...prevData, { id: nextId, value: sensorValue.value }];

        if (newData.length > 60) {
          newData.splice(0, newData.length - 60);
        }

        return newData;
      });
    });

    socketRef.current.on("disconnect", () => {
      console.log("Disconnected from the server");
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const chartConfig = {
    heartRate: {
      label: "Heart Rate",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Heart Rate Monitor</CardTitle>
        <CardDescription>Real-time heart rate data</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-[2/1] w-full">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="id"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(id) => id}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent labelFormatter={(id) => `Reading ${id}`} />
              }
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="var(--color-heartRate)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 7 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Monitoring real-time heart rate data
        </div>
        <div className="leading-none text-muted-foreground">
          Showing the last 60 readings
        </div>
      </CardFooter>
    </Card>
  );
};

export default Heartrate;
