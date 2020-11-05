import * as React from "react";
//____________________________________________
//
interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
}
//____________________________________________
//
const Component: React.FC<ButtonProps & { className?: string }> = ({
  onClick,
  disabled,
  className,
}) => <button onClick={onClick} disabled={disabled} className={className} />;
//____________________________________________
//
export default Component;
