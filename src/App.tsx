import React from "react";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse at bottom, hsl(0, 0%, 80%) 0%, hsl(0, 0%, 90%) 100%)",
      }}
    >
      <Stopwatch />
    </div>
  );
}

export default App;
