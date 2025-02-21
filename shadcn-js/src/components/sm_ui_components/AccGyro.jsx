import * as React from "react";
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
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartConfig = {
  accX: { label: "Accel X", color: "hsl(var(--chart-2))" },
  accY: { label: "Accel Y", color: "hsl(var(--secondary))" },
  accZ: { label: "Accel Z", color: "hsl(var(--chart-4))" },
  gyroX: { label: "Gyro X", color: "hsl(var(--chart-1))" },
  gyroY: { label: "Gyro Y", color: "hsl(var(--primary))" },
  gyro_z: { label: "Gyro Z", color: "hsl(var(--chart-3))" },
};

const AccGyro = () => {
  const [data, setData] = useState([]);
  const [timeRange, setTimeRange] = React.useState("90s");
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io("http://localhost:3000", {
      withCredentials: true,
    });

    socketRef.current.on("connect", () => {
      console.log("Connected to the server");
    });

    socketRef.current.on("mpu6050_data", (sensorData) => {
      setData((prevData) => {
        const nextId =
          prevData.length > 0 ? (prevData[prevData.length - 1].id + 1) % 90 : 0;

        const newData = [
          ...prevData,
          {
            id: nextId,
            time: nextId + "s",
            accX: sensorData.accelerometer.x,
            accY: sensorData.accelerometer.y,
            accZ: sensorData.accelerometer.z,
            gyroX: sensorData.gyroscope.x,
            gyroY: sensorData.gyroscope.y,
            gyroZ: sensorData.gyroscope.z,
          },
        ];

        if (newData.length > 90) {
          newData.splice(0, newData.length - 90);
        }

        console.log(newData);
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

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Accelerometer and Gyroscope Data</CardTitle>
          <CardDescription>Real-time sensor data</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 90 seconds" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90s" className="rounded-lg">
              Last 90 seconds
            </SelectItem>
            <SelectItem value="30s" className="rounded-lg">
              Last 30 seconds
            </SelectItem>
            <SelectItem value="10s" className="rounded-lg">
              Last 10 seconds
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={data}>
            <defs>
              <linearGradient id="fillAccX" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-accX)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-accX)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillGyroX" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-gyroX)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-gyroX)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillAccY" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-accY)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-accY)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillGyroY" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-gyroY)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-gyroY)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillAccZ" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-accZ)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-accZ)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillGyroZ" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-gyroZ)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-gyroZ)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tick
              Margin={8}
              minTickGap={32}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => value}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="accX"
              type="monotone"
              fill="url(#fillAccX)"
              stroke="var(--color-accX)"
              stackId="a"
            />
            <Area
              dataKey="gyroX"
              type="monotone"
              fill="url(#fillGyroX)"
              stroke="var(--color-gyroX)"
              stackId="a"
            />
            <Area
              dataKey="accY"
              type="monotone"
              fill="url(#fillAccY)"
              stroke="var(--color-accY)"
              stackId="a"
            />
            <Area
              dataKey="gyroY"
              type="monotone"
              fill="url(#fillGyroY)"
              stroke="var(--color-gyroY)"
              stackId="a"
            />
            <Area
              dataKey="accZ"
              type="monotone"
              fill="url(#fillAccZ)"
              stroke="var(--color-accZ)"
              stackId="a"
            />
            <Area
              dataKey="gyroZ"
              type="monotone"
              fill="url(#fillGyroZ)"
              stroke="var(--color-gyroZ)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default AccGyro;
