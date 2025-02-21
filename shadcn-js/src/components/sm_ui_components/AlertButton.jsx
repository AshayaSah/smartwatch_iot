import React, { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const AlertButton = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount === 0) {
      // Start the timer only on the first click
      const newTimer = setTimeout(() => {
        setClickCount(0); // Reset clicks after 1.5s
      }, 1000);
      setTimer(newTimer);
    }
  };

  useEffect(() => {
    if (clickCount >= 3) {
      clearTimeout(timer); // Stop the timer once the threshold is reached
      setShowDialog(true);
      setClickCount(0); // Reset clicks
    }
  }, [clickCount]);

  return (
    <div className="w-full flex justify-center items-center">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Emergency Alert</CardTitle>
          <CardDescription>
            Click the button three times within 1.5 seconds to trigger an alert.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Button onClick={handleClick} className="w-60">
            Alert
          </Button>

          <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Emergency Alert</AlertDialogTitle>
                <AlertDialogDescription>
                  Do you want to call for emergency assistance?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setShowDialog(false)}>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => alert("Calling for emergency!")}
                >
                  Call Emergency
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlertButton;
