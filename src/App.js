import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";

const App = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    setHouses([]);
    axios.get("https://anapioficeandfire.com/api/houses/").then((response) => {
      setHouses(response);
      console.log(response);
    });
  }, []);
  return (
    <React.StrictMode>
      <div className="grid-container">
        <h1>Houses of Game Of Thrones</h1>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
