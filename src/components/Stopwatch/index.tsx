import * as React from "react";
import Viewer from "../Viewer";
import Button from "../Button";
//____________________________________________
//
const Component: React.FC = () => {
  const [timer, setTimer] = React.useState(0);

  return (
    <div>
      <Viewer timer={timer} />
      <Button />
    </div>
  );
};
//____________________________________________
//
export default Component;
