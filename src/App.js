import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";
import GridOfHouses from "./GridOfHouses";
import { Router, Link } from "@reach/router";

const App = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    setHouses([]);
    axios.get("https://anapioficeandfire.com/api/houses/").then((response) => {
      setHouses(response);
    });
  }, []);
  return (
    <React.StrictMode>
      <div className="grid-container">
        <Link to="/" className="no-text-deco">
          <h1>Houses of Game Of Thrones</h1>
        </Link>
        <Router>
          <GridOfHouses path="/" houses={houses} />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
