import { Typography } from "@mui/material";
import React from "react";
export default function DeveloperWorkCard(props) {
  return (
    <>
      {props.reverse ? (
        <div className="DeveloperCardMain">
          <div className="DeveloperCardImg_Div">
            <img className="DeveloperCard_Img" src={props.src} />
          </div>
          <div className="DeveloperCard_Typo">
            <div style={{ width: "80%" }}>
              <Typography
                sx={{
                  color: "#0F52BA",
                  fontWeight: "800",
                  fontSize: "1.5rem",
                  marginBottom: "2%",
                }}
              >
                {props.title}
              </Typography>
              <Typography
                sx={{
                  color: "#282828",
                  fontWeight: "400",
                  fontSize: ".9rem",
                  width: "90%",
                }}
              >
                {props.desp}
              </Typography>
            </div>
          </div>
        </div>
      ) : (
        <div className="DeveloperCardMain">
          <div className="DeveloperCard_Typo">
            <div style={{ width: "80%" }}>
              <Typography
                sx={{
                  color: "#0F52BA",
                  fontWeight: "800",
                  fontSize: "1.5rem",
                  marginBottom: "2%",
                }}
              >
                {props.title}
              </Typography>
              <Typography
                sx={{
                  color: "#282828",
                  fontWeight: "400",
                  fontSize: ".9rem",
                  width: "100%",
                }}
              >
                {props.desp}
              </Typography>
            </div>
          </div>
          <div className="DeveloperCardImg_Div">
            <img className="DeveloperCard_Img" src={props.src} />
          </div>
        </div>
      )}
    </>
  );
}
