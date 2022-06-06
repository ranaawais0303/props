import React from "react";

function Card(props) {
  return (
    <div>
      {/* <h2>{props.name}</h2> */}
      <h2>Rana</h2>
      <img
        src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.tandoorihut.com.pk%2Fstorage%2F2014%2F12%2Fsoy-sauce-noodlesH2.jpg&imgrefurl=https%3A%2F%2Fwww.tandoorihut.com.pk%2Fproduct%2Fmix-fried-noodles%2F&tbnid=gMibNSfzGXokdM&vet=12ahUKEwiDqYeD3Zj4AhUEeRoKHZa1AZ8QMygGegUIARD7AQ..i&docid=tP6pirORolUNsM&w=1200&h=800&q=noodles&ved=2ahUKEwiDqYeD3Zj4AhUEeRoKHZa1AZ8QMygGegUIARD7AQ"
        alt="my name"
      />
      {/* <img src={props.src} alt={props.alt} /> */}
      <p>03203333</p>
      <p>{props.number}</p>
      <p>ranaawais0303@g.com</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
