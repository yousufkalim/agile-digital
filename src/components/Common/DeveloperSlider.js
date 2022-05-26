import React from "react";
import { Button, Typography } from "@mui/material";

export default function DeveloperSlider(props) {
  return (
    <>
      <div className="DeveloperDiv">
        <div className="DeveloperDiv_Img">
          <img className="Developer_Img" src={props.src} />
        </div>
        <div className="DeveloperDiv_Typo">
          <Typography className="DeveloperTypo_H">{props.heading}</Typography>
          <Typography className="DeveloperTypo_Desp">{props.desp}</Typography>
          <Button className="DeveloperTypo_Btn" variant="outlined">
            <a href={`${process.env.REACT_APP_DEMO}/contactus`}>
              {props.btnText || "Contact us"}
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
