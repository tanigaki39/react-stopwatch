import * as React from "react";
import styles from "./index.module.css";
//____________________________________________
//
interface CounterProps {
  timer: number;
}
//____________________________________________
//
const Component: React.FC<CounterProps> = ({ timer }) => (
  <div className={styles.root}>{timer}</div>
);
//____________________________________________
//
export default Component;
