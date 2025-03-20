import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import toast, { Toaster } from "react-hot-toast";

const AlertButton = () => {
  const [clickCount, setClickCount] = useState(0);
  const [timer, setTimer] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false); // State for overlay

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount === 0) {
      // Start timer on first click
      const newTimer = setTimeout(() => {
        setClickCount(0); // Reset clicks after 1s
      }, 1000);
      setTimer(newTimer);
    }
  };

  useEffect(() => {
    if (clickCount >= 3) {
      clearTimeout(timer); // Stop timer once threshold is reached
      setClickCount(0); // Reset clicks
      setShowOverlay(true); // Show overlay

      // Show toast with overlay
      toast(
        (t) => (
          <Card className="w-[300px] shadow-lg bg-white relative z-50">
            <CardHeader className="text-center">
              <CardTitle className="text-red-600">
                !!! Help Help Help !!!
              </CardTitle>
              <CardDescription>Calling for Emergency...</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button
                size="sm"
                className="w-[60%]"
                onClick={() => {
                  toast.dismiss(t.id);
                  setShowOverlay(false); // Hide overlay when dismissed
                }}
              >
                Dismiss
              </Button>
            </CardContent>
          </Card>
        ),
        { duration: Infinity }
      );
    }
  }, [clickCount]);

  return (
    <div className="w-full flex justify-center items-center relative">
      {/* Overlay (visible when toast is active) */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
      )}

      <Toaster
        toastOptions={{
          style: {
            background: "transparent", // Primary blue color (Tailwind `bg-blue-900`)
            border: "none",
            boxShadow: "none",
          },
        }}
      />

      <Card className="w-full relative z-39">
        <CardHeader>
          <CardTitle>Emergency Alert</CardTitle>
          <CardDescription>
            Click the button three times within 1 second to trigger an alert.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Button onClick={handleClick} className="w-60">
            Alert
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlertButton;
