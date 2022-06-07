import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className="">
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.src} alt={props.alt} />
        </div>
        <div className="bottom">
          <p>{props.number}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
