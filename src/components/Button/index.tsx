import * as React from "react";
//____________________________________________
//
interface ButtonProps {
  isRunning?: boolean;
}
//____________________________________________
//
const Component: React.FC<ButtonProps> = ({ isRunning }) => (
  <button>{isRunning ? "STOP" : "START"}</button>
);
//____________________________________________
//
export default Component;
