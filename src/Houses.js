import React, { useState, useEffect } from "react";
import axios from "axios";

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
          <div>{house.name}</div>
          <div>{house.region}</div>
          <div>{house.words}</div>
        </>
      )}
    </>
  );
};

export default Houses;
