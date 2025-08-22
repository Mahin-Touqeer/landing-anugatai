import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
} from "date-fns";

const targetDate = new Date("2025-09-14T00:00:00");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      if (now >= targetDate) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      const totalSeconds = differenceInSeconds(targetDate, now);
      const days = Math.floor(totalSeconds / (24 * 60 * 60));
      const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    {
      label: "Days",
      value: timeLeft.days,
      color: "#d3e9f9",
    },
    {
      label: "hours",
      value: timeLeft.hours,
      color: "from-purple-600 to-pink-600",
    },
    {
      label: "minutes",
      value: timeLeft.minutes,
      color: "from-green-500 to-teal-600",
    },
    {
      label: "seconds",
      value: timeLeft.seconds,
      color: "from-orange-500 to-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <div
      initial="hidden"
      whileInView="visible"
      //   viewport={{ once: true }}
      //   variants={containerVariants}
      className="bg-transparent mb-8 backdrop-blur-xl rounded-3xl p-2 md:px-4 px-0 border border-white/30 max-w-4xl mx-auto"
    >
      {/* Countdown Display */}
      <div
        variants={itemVariants}
        className="grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-6 "
      >
        {timeUnits.map((unit, index) => (
          <div
            key={index}
            variants={itemVariants}
            className="relative group"
            // key={index}
          >
            <div
              className={`bg-[#d3e9f9] text-[#666] p-3 sm:p-2 rounded-2xl shadow group-hover:shadow-xl transition-all duration-300`}
            >
              <div className="relative z-10 text-center">
                <div
                  key={unit.value}
                  variants={numberVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-xl md:text-4xl font-bold   font-mono"
                >
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="text-black/90 text-sm md:text-base font-semibold  tracking-wider">
                  {unit.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
