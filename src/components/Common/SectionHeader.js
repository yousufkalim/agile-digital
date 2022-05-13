import React from "react";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
// AOS.init();
export default function SectionHeader(props) {
  return (
    <>
      {props.WorkProcess ? (
        <div
          className={props.LeftSectionHeader || "SectionHeaderTypo"}
          // data-aos="fade-down-left"
        >
          <Typography
            className="SectionHeaderH1"
            color={props.colorH1 || "#fff"}
            sx={{ width: "30%", fontWeight: "600", fontSize: "1.3rem" }}
          >
            {props.h1}
          </Typography>

          <Divider
            className="SectionHeaderDivider"
            width={props.width || "10%"}
            sx={{
              height: "5px",
              backgroundColor: "#42C2FF",
              borderRadius: "4px",
              margin: ".7% 0",
            }}
          />

          <Typography
            className="SectionHeaderH2"
            color={props.colorH2 || "#003B7E"}
          >
            {props.h2}
          </Typography>
          <Typography
            className="SectionHeaderDesp"
            color={props.colorDesp || "#fff"}
          >
            {props.decription}
          </Typography>
        </div>
      ) : (
        <div
          className={props.LeftSectionHeader || "SectionHeaderTypo"}
          // data-aos="fade-down-left"
        >
          <Typography
            className="SectionHeaderH1"
            color={props.colorH1 || "#42C2FF"}
          >
            {props.h1}
          </Typography>
          <Divider
            className="SectionHeaderDivider"
            width={props.width || "10%"}
          />
          <Typography
            className="SectionHeaderH2"
            color={props.colorH2 || "#003B7E"}
          >
            {props.h2}
          </Typography>
          <Typography
            className="SectionHeaderDesp"
            color={props.colorDesp || "#404040B2"}
          >
            {props.decription}
          </Typography>
        </div>
      )}
    </>
  );
}
