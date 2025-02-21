"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="h-full flex flex-col justify-center align-middle">
      <CardContent className="pt-6">
        <h2 className="text-4xl font-bold text-center text-primary">
          {formatTime(time)}
        </h2>
        <p className="text-lg text-center text-muted-foreground mt-2">
          {formatDate(time)}
        </p>
      </CardContent>
    </Card>
  );
}
