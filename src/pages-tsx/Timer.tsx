import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  time: number;
  setTime: (value: number) => void;
};

function Timer({ time, setTime }: Props) {
  const [isRunning, setIsRunning] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number): string => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">学習中</h1>
        <p className="text-4xl font-mono mb-8">{formatTime(time)}</p>
        <div className="flex gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={
              isRunning
                ? "flex-1 bg-yellow-400 text-white py-2 rounded-lg"
                : "flex-1 bg-green-500 text-white py-2 rounded-lg"
            }
          >
            {isRunning ? "停止" : "再開"}
          </button>
          <button
            onClick={() => navigate("/record")}
            className="flex-1 bg-red-500 text-white py-2 rounded-lg"
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
