import * as React from "react";
//____________________________________________
//
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}
//____________________________________________
//
const Component: React.FC<ButtonProps> = ({ label, onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled}>
    {label}
  </button>
);
//____________________________________________
//
export default Component;
