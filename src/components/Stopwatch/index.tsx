import * as React from "react";
import Viewer from "../Viewer";
import Button from "../Button";
//____________________________________________
//
const Component: React.FC = () => {
  const [timer, setTimer] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const timerRef = React.useRef(0);

  const handleStart = () => {
    setIsRunning(true);
    timerRef.current = window.setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 10);
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const handleClear = () => {
    setTimer(0);
  };

  return (
    <div>
      <Viewer timer={timer} />
      <Button
        onClick={isRunning ? handleStop : handleStart}
        label={isRunning ? "STOP" : "START"}
      />
      <Button onClick={handleClear} label="CLEAR" disabled={isRunning} />
    </div>
  );
};
//____________________________________________
//
export default Component;
