import * as React from "react";
import Viewer from "../Viewer";
import Button from "../Button";
import styles from "./index.module.css";
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
    <div className={styles.root}>
      <Button
        onClick={isRunning ? handleStop : handleStart}
        className={styles.startButton}
      />
      <Button
        onClick={handleClear}
        disabled={isRunning}
        className={styles.clearButton}
      />
      <div className={styles.inner}>
        <div>STOPWATCH</div>
        <div className={styles.display}>
          <Viewer timer={timer} />
        </div>
        <div>TT-001</div>
      </div>
    </div>
  );
};
//____________________________________________
//
export default Component;
