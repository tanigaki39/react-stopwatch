import * as React from "react";
//____________________________________________
//
interface ButtonProps {
  isRunning?: boolean;
  onClick: () => void;
}
//____________________________________________
//
const Component: React.FC<ButtonProps> = ({ isRunning, onClick }) => (
  <button onClick={onClick}>{isRunning ? "STOP" : "START"}</button>
);
//____________________________________________
//
export default Component;
