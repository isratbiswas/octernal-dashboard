import { useState, useEffect, useCallback } from "react";
import { Pause, Play, Square } from "lucide-react";
import { motion } from "framer-motion";

export function TimeTracker() {
  const [seconds, setSeconds] = useState(5048);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const reset = useCallback(() => {
    setRunning(false);
    setSeconds(0);
  }, []);

  const fmt = (n: number) => String(n).padStart(2, "0");
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative group overflow-hidden rounded-[2.5rem] bg-[#06371b] p-8 text-white shadow-2xl w-80 aspect-square flex flex-col justify-between"
    >
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 400 400"
          className="absolute w-[150%] h-[150%] -top-10 -left-10 opacity-60 mix-blend-screen"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#166534"
            strokeWidth="40"
            strokeLinecap="round"
            d="M0,200 C50,100 150,100 200,200 C250,300 350,300 400,200 S550,100 600,200"
            className="animate-[pulse_4s_infinite]"
          />
          <path
            fill="none"
            stroke="#14532d"
            strokeWidth="30"
            strokeLinecap="round"
            d="M-50,220 C20,120 120,120 170,220 C220,320 320,320 370,220 S520,120 570,220"
            className="animate-[pulse_6s_infinite]"
          />
        </svg>

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-between">
        <h2 className="w-full text-left text-lg font-medium tracking-tight text-white/90">
          Time Tracker
        </h2>

        <div className="flex flex-col items-center">
          <motion.span
            key={seconds}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            className="font-sans text-6xl font-medium tracking-tighter tabular-nums"
          >
            {fmt(h)}:{fmt(m)}:{fmt(s)}
          </motion.span>
        </div>

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => setRunning((r) => !r)}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#06371b] shadow-lg transition-transform hover:scale-110 active:scale-95"
          >
            {running ? (
              <Pause fill="currentColor" size={28} />
            ) : (
              <Play fill="currentColor" size={28} className="ml-1" />
            )}
          </button>

          <button
            type="button"
            onClick={reset}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e13d3d] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
          >
            <Square fill="currentColor" size={24} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
