import React from "react";
import { Typography } from "@mui/material";
export default function WorkProcessSteps(props) {
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
        <img style={{ width: "20%", margin: "3% 0%" }} src={props.src} />
        <Typography sx={{ color: "white", fontWeight: "700", margin: "5% 0%" }}>
          {props.title}
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontWeight: "400",
            fontSize: ".7rem",
            width: "80%",
            opacity: "80%",
          }}
        >
          {props.desp}
        </Typography>
      </div>
    </>
  );
}
