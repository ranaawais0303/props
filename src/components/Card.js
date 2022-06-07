import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
import "./Card.css";
function Card(props) {
  return (
    <div className="">
      <div className="card">
        <div className="top">
          <p>{props.id}</p>
          <h2 className="name">{props.name}</h2>
          <Avatar src={props.src} />
        </div>
        <div className="bottom">
          <Details info={props.number} />
          <Details info={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;
