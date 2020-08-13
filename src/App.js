import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import GridOfHouses from "./GridOfHouses";
import axios from "axios";
import { Router, Link } from "@reach/router";
import Houses from "./Houses";

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
      <div className="curved">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,186.7C840,192,960,160,1080,149.3C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <div className="grid-container">
          <Link to="/" className="no-text-deco">
            <h1>Houses of Game Of Thrones</h1>
          </Link>
          <Router>
            <GridOfHouses path="/" houses={houses} />
            <Houses path="/houses/:id" />
          </Router>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,64L60,85.3C120,107,240,149,360,186.7C480,224,600,256,720,240C840,224,960,160,1080,138.7C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
