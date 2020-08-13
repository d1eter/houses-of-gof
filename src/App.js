import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <React.StrictMode>
      <h1>Hi from App</h1>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
