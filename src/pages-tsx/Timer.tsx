import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    time: number;
    setTime: (value: number) => void;
}

function Timer( {time, setTime}: Props ) {
    const [isRunning, setIsRunning] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isRunning) return;
        const interval = setInterval( () => {
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
    <div className="page">
      <h1>学習中</h1>
      <p>{formatTime(time)}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "停止" : "再開"}
      </button>
      <button onClick={() => navigate("/record")}>終了</button>
    </div>
  );
}

export default Timer;