import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <React.StrictMode>
      <div className="grid-container">
        <h1>Houses of Game Of Thrones</h1>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
