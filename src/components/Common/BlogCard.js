import { Typography } from "@mui/material";
import React from "react";
import Blog1 from "../../assets/images/Blog1.svg";
export default function BlogCard(props) {
  return (
    <>
      <div className="BlogCardMain">
        <img src={props.src || Blog1} />
        <Typography
          sx={{
            fontSize: "70%",
            color: "#52525B",
            fontWeight: "400",
            margin: "2% 0%",
          }}
        >
          {props.date}
        </Typography>
        <Typography sx={{ color: "#12141D", fontWeight: "700", width: "70%" }}>
          {props.title}
        </Typography>
      </div>
    </>
  );
}
