import React from "react";
import { Link } from "@reach/router";

const GridOfHouses = ({ houses }) => {
  return (
    <div className="grid">
      {houses.length === 0 ? (
        <h1>No Houses Found</h1>
      ) : (
        houses.data.map((house, id) => (
          <Link to={`/houses/${id + 1}`} className="no-text-deco" key={id}>
            <div className="card">
              <h4 className="card-title">{house.name}</h4>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default GridOfHouses;
