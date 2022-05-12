import React from "react";
import Info1 from "../../assets/images/Info1.svg";
export default function InfoBox(props) {
  return (
    <>
      <div className="InfoDiv">
        <img src={props.src || Info1} />
        <h2>{props.number}</h2>
        <p>{props.title}</p>
      </div>
    </>
  );
}
