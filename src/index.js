import React from "react";
import ReactDOM from "react-dom";

const fname = "Nathan";
const lname = "Drake";

//let luckyNum = 9;
ReactDOM.render(
  <div>
    <h1>hello {`${fname} ${lname}`} !</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 100)}</p>
  </div>,
  document.getElementById("root")
);
