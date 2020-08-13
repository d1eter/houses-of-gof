import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Houses = ({ id }) => {
  const [house, setHouse] = useState({});

  useEffect(() => {
    setHouse({});
    axios
      .get(`https://anapioficeandfire.com/api/houses/${id}`)
      .then((response) => {
        setHouse(response.data);
      });
  }, []);

  return (
    <>
      {Object.keys(house).length === 0 ? (
        <h1>No House Found</h1>
      ) : (
        <>
          <h3>{house.name}</h3>
          <ul className="house-details">
            <li>
              Region: <span>{house.region}</span>
            </li>
            <li>
              Coat of Arms: <span>{house.coatOfArms}</span>
            </li>
            <li>
              Words: <span>{house.words}</span>
            </li>
          </ul>
          <Link to="/" className="no-text-deco back-link">
            &larr; Back to Houses
          </Link>
        </>
      )}
    </>
  );
};

export default Houses;
