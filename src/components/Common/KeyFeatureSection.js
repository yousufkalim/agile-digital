// Init
import { Grid, Typography } from "@mui/material";
import React from "react";
import SectionHeader from "./SectionHeader";
import KeyFeatures from "./KeyFeatures";
import keyIcon5 from "../../assets/images/keyIcon5.svg";
import keyIcon1 from "../../assets/images/keyIcon1.svg";
import keyIcon2 from "../../assets/images/keyIcon2.svg";
import keyIcon3 from "../../assets/images/keyIcon3.svg";
import keyIcon4 from "../../assets/images/keyIcon4.svg";
import keyIcon6 from "../../assets/images/keyIcon6.svg";
// Importing Components

// Home Component
export default function KeyFeatureSection(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SectionHeader
        h2="Key features"
        decription="This sounds simple, but it is beneficial to your business success."
        colorDesp
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "4% 0%",
        }}
      >
        <Grid container spacing={1} sx={{ width: "85%" }}>
          <Grid xs={12} sm={6} md={4}>
            <KeyFeatures
              src={keyIcon5}
              title="SMOOTH COMMUNICATION"
              desp="Many of these business ideas are home-based. While they may not make you a billionaire."
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <KeyFeatures
              src={keyIcon1}
              title="TECHNOLOGIES"
              desp="Many of these business ideas are home-based. While they may not make you a billionaire."
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <KeyFeatures
              src={keyIcon2}
              title="In-House Team"
              desp="Many of these business ideas are home-based. While they may not make you a billionaire."
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            {props.UxKey ? (
              <KeyFeatures
                src={keyIcon3}
                title="UX RESEARCH"
                desp="Many of these business ideas are home-based. While they may not make you a billionaire."
              />
            ) : (
              <KeyFeatures
                src={keyIcon3}
                title="Product Development"
                desp="Many of these business ideas are home-based. While they may not make you a billionaire."
              />
            )}
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <KeyFeatures
              src={keyIcon4}
              title="FULL FLEXIBILITY"
              desp="Many of these business ideas are home-based. While they may not make you a billionaire."
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <KeyFeatures
              src={keyIcon6}
              title="USER-FOCUSED PROCESS"
              desp="Many of these business ideas are home-based. While they may not make you a billionaire."
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
