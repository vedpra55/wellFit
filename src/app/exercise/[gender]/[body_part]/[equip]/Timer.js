import { updateUserPoints } from "@/utils/clientApiCalls";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const Timer = ({ user }) => {
  const [seconds, setSeconds] = useState(6);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    if (seconds === 0) {
      handleTimerComplete();
      setIsActive(false);
    }
  }, [seconds]);

  const handleTimerComplete = async () => {
    const points = user?.points + 10;
    await updateUserPoints(user.uid, points);

    toast.success("Great You Earn 10 Points");
  };

  return (
    <div>
      <p className="text-[15px]">Excersice Counter: {seconds} seconds</p>
    </div>
  );
};

export default Timer;
