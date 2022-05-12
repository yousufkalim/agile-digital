import React from "react";
import SectionHeader from "../Common/SectionHeader";
import VisionImg from "../../assets/images/visionImg.svg";
import { Typography } from "@mui/material";
export default function VisionSection() {
  return (
    <>
      <div className="VisionDiv">
        <div className="VisionTypo">
          <SectionHeader
            LeftSectionHeader
            h1="We believe our vision"
            h2="Our Vision"
            decription="Falcon Consulting is a development agency that specializes in consulting, application development and consulting in the field of new technologies. We combine rigor, quality of work and optimized production costs"
            colorDesp
            width="15%"
          />
          <div className="VisionList">
            <Typography sx={{ fontSize: ".9rem", padding: "1% 0%" }}>
              We believe that talent and skills do not have borders.
            </Typography>
            <ul style={{ marginLeft: "5%" }}>
              <li>IN-HOUSE TEAM</li>
              <li>TECHNOLOGIES</li>
              <li>USER-FOCUSED PROCESS</li>
              <li>SMOOTH COMMUNICATION</li>
              <li>6 YEARS' EXPERIENCE</li>
              <li>FULL FLEXIBILITY</li>
              <li>HIGH QUALITY CODE</li>
              <li>TRANSPARENCY</li>
            </ul>
          </div>
        </div>
        <div className="VisionImg">
          <img style={{ width: "65%" }} src={VisionImg} />
        </div>
      </div>
    </>
  );
}
