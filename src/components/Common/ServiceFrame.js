import React from "react";
import WebFrame from "../../assets/images/webframe.svg";

export default function ServiceFrame(props) {
  return (
    <>
      <div className="ServiceFrame">
        <img src={props.src || WebFrame} width={props.width || "70%"} />
      </div>
    </>
  );
}
