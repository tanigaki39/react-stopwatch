import * as React from "react";
import styles from "./index.module.css";
//____________________________________________
//
interface CounterProps {
  timer: number;
}
//____________________________________________
//
const formatTime = (time: number) => {
  const milliseconds = `0${time % 100}`.slice(-2);
  const seconds = `0${Math.floor(time / 100) % 60}`.slice(-2);
  const minutes = `0${Math.floor(time / 6000) % 60}`.slice(-2);
  const hours = `${Math.floor(time / 360000)}`;
  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
};

const Component: React.FC<CounterProps> = ({ timer }) => {
  return (
    <div className={styles.root}>
      <div>{formatTime(timer)}</div>
    </div>
  );
};
//____________________________________________
//
export default Component;
