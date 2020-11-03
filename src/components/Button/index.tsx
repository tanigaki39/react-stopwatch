import * as React from "react";
//____________________________________________
//
interface ButtonProps {
  label: string;
  onClick: () => void;
}
//____________________________________________
//
const Component: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);
//____________________________________________
//
export default Component;
