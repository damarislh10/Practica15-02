import React from "react";
import results from "../data/data";

const Cards = () => {
  return (
    <div style={{flexWrap:"wrap",marginTop: '5%'}}>
      {results.results.map((start) => (
        <div className="row no-gutters" key={start.id} style={{marginLeft:"15%",marginTop:"2%"}}>
          <div className="col-md-4">
            <img src={start.image} style={{width: '200px'}} className="card-img" alt={start.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{start.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
