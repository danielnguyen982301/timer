import { useState, useRef, useEffect } from "react";
import { Record } from "./types";

type UseTimerHook = {
  time: number;
  timeDiff: number;
  isRunning: boolean;
  records: Record[];
  toggleTimer: () => void;
  record: () => void;
  reset: () => void;
};

const useTimer = (ini = 0): UseTimerHook => {
  const [time, setTime] = useState(ini);
  const [isRunning, setIsRunning] = useState(false);
  const [timeDiff, setTimeDiff] = useState(0);
  const [records, setRecords] = useState<Record[]>([]);
  const prevTime = useRef(0);
  const refTime = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (records.length) {
      setTimeDiff(time - prevTime.current);
    }
  }, [time, records.length]);

  const toggleTimer = () => {
    const newRunning = !isRunning;
    if (newRunning) {
      refTime.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 10);
    } else {
      clearInterval(refTime.current);
    }
    setIsRunning(newRunning);
  };

  const record = () => {
    setRecords([{ timeDiff, time }, ...records]);
    prevTime.current = time;
  };

  const reset = () => {
    setTime(0);
    setTimeDiff(0);
    setRecords([]);
    prevTime.current = 0;
    clearInterval(refTime.current);
  };

  return { time, timeDiff, isRunning, records, toggleTimer, record, reset };
};
export default useTimer;
