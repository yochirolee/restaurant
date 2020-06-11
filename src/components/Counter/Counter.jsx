import React, { useState,useContext } from "react";

export default function Counter(props) {
  

   

  return (
    <div className="container-counters">
      <button className="badge badge-success" onClick={props.HandleDecrement}>-</button>
  <div className="badge badge-secondary">{props.value}</div>
      <button className="badge badge-success" onClick={props.HandleIncrement}>+</button>
    </div>
  );
}
