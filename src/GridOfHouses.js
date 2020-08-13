import React from "react";

const GridOfHouses = ({ houses }) => {
  return (
    <div className="grid">
      {houses.length === 0 ? (
        <h1>No Houses Found</h1>
      ) : (
        houses.data.map((house, id) => (
          <div className="card" key={id}>
            <h4 className="card-title">{house.name}</h4>
          </div>
        ))
      )}
    </div>
  );
};

export default GridOfHouses;
