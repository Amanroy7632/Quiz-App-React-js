import React, { useState, useEffect } from "react";

const Timer = ({ targetDate, isSubmitted,setActiveTimeUp}) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
   
    return difference > 0
      ? {
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : {};
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    if (isSubmitted) {
      clearInterval(timer);
      return;
    }
    return () => clearInterval(timer);
  }, [targetDate]);
//   if (timeLeft.hours===0 && timeLeft.minutes===0 && timeLeft.seconds===0) {
//     setActiveTimeUp(true)
//     // setCurrentQuestion(questions.length)
//   }

  return (
    <div className="flex items-center justify-center ">
      {Object.keys(timeLeft).length > 0 ? (
        <h2>
          Time Remaining: {timeLeft.minutes} : {timeLeft.seconds}{" "}
        </h2>
      ) : (
        <h2 className=" text-red-500">Time Up</h2>
      )}
    </div>
  );
};

export default Timer;
