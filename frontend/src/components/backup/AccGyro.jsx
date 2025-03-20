import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

// Sample data for accelerometer and gyroscope
const chartData = [
  {
    time: "0s",
    accX: 0.0,
    accY: 0.01,
    accZ: 1.0,
    gyroX: 0.02,
    gyroY: -0.05,
    gyroZ: 0.01,
  },
  {
    time: "1s",
    accX: 0.01,
    accY: 0.02,
    accZ: 0.99,
    gyroX: 0.03,
    gyroY: -0.04,
    gyroZ: 0.02,
  },
  {
    time: "2s",
    accX: 0.02,
    accY: 0.0,
    accZ: 1.0,
    gyroX: 0.01,
    gyroY: -0.03,
    gyroZ: 0.01,
  },
  {
    time: "0s",
    accX: 0.0,
    accY: 0.01,
    accZ: 1.0,
    gyroX: 0.02,
    gyroY: -0.05,
    gyroZ: 0.01,
  },
  {
    time: "1s",
    accX: 0.01,
    accY: 0.02,
    accZ: 0.99,
    gyroX: 0.03,
    gyroY: -0.04,
    gyroZ: 0.02,
  },
  {
    time: "2s",
    accX: 0.02,
    accY: 0.0,
    accZ: 1.0,
    gyroX: 0.01,
    gyroY: -0.03,
    gyroZ: 0.01,
  },
  {
    time: "3s",
    accX: 0.01,
    accY: 0.03,
    accZ: 0.98,
    gyroX: 0.04,
    gyroY: -0.06,
    gyroZ: 0.03,
  },
  {
    time: "4s",
    accX: 0.0,
    accY: 0.01,
    accZ: 1.0,
    gyroX: 0.02,
    gyroY: -0.05,
    gyroZ: 0.01,
  },
  {
    time: "5s",
    accX: 0.01,
    accY: 0.02,
    accZ: 0.99,
    gyroX: 0.03,
    gyroY: -0.04,
    gyroZ: 0.02,
  },
  {
    time: "6s",
    accX: 0.02,
    accY: 0.0,
    accZ: 1.0,
    gyroX: 0.01,
    gyroY: -0.03,
    gyroZ: 0.01,
  },
  {
    time: "7s",
    accX: 0.03,
    accY: 0.01,
    accZ: 0.97,
    gyroX: 0.05,
    gyroY: -0.07,
    gyroZ: 0.04,
  },
  {
    time: "8s",
    accX: 0.01,
    accY: 0.02,
    accZ: 0.98,
    gyroX: 0.02,
    gyroY: -0.05,
    gyroZ: 0.01,
  },
  {
    time: "9s",
    accX: 0.0,
    accY: 0.01,
    accZ: 1.0,
    gyroX: 0.03,
    gyroY: -0.04,
    gyroZ: 0.02,
  },
  // Add more data points as needed
];

const chartConfig = {
  accelerometer: {
    label: "Accelerometer",
    color: "hsl(var(--primary))",
  },
  gyroscope: {
    label: "Gyroscope",
    color: "hsl(var(--chart-4))",
  },
};

export default function AccGyro() {
  const [timeRange, setTimeRange] = React.useState("90s");

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
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillAcc" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-accelerometer)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-accelerometer)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillGyro" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-gyroscope)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-gyroscope)"
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
              fill="url(#fillAcc)"
              stroke="var(--color-accelerometer)"
              stackId="a"
            />
            <Area
              dataKey="gyroX"
              type="monotone"
              fill="url(#fillGyro)"
              stroke="var(--color-gyroscope)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
