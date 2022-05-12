import React from "react";
import { Typography } from "@mui/material";
export default function KeyFeatures(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "10%",
        }}
      >
        <img style={{ width: "15%", margin: "3% 0%" }} src={props.src} />
        <Typography
          sx={{ fontWeight: "800", margin: "5% 0%", fontSize: ".9rem" }}
        >
          {props.title}
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: ".7rem",
            width: "60%",
            opacity: "80%",
          }}
        >
          {props.desp}
        </Typography>
      </div>
    </>
  );
}
