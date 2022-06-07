import React from "react";
import Card from "./Card";
import "./AddCard.css";

function AddCard() {
  return (
    <div>
      <div>
        <Card
          name="rana awais"
          src="https://i.ytimg.com/vi/pEjpuVuXTpA/maxresdefault.jpg"
          alt="my name"
          number="0320321220"
          email="ranaawais@gmail.com"
        />
      </div>
      <div>
        <Card
          name="Sarmad"
          src="https://i.ytimg.com/vi/iwQMk1-zEuU/maxresdefault.jpg"
          alt="bro"
          number="031433333"
          email="srana544@gml.com"
        />
      </div>
    </div>
  );
}
export default AddCard;
