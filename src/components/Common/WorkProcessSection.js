// Init
import { Grid, Typography } from "@mui/material";
import React from "react";
import SectionHeader from "./SectionHeader";
import Step1 from "../../assets/images/step1.svg";
import WorkProcessSteps from "./WorkProcessSteps";
import Step2 from "../../assets/images/step2.svg";
import Step3 from "../../assets/images/step3.svg";
import Step4 from "../../assets/images/step4.svg";
// Importing Components

// Home Component
export default function WorkProcessSection(props) {
  return (
    <div
      style={{
        backgroundColor: "#003B7E",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SectionHeader
        WorkProcess
        h1="We always follow the standard work process"
        decription="We solve clients' projects in a simple & efficient way"
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
        {props.UxWorkProcess ? (
          <Grid container spacing={1} sx={{ width: "85%" }}>
            <Grid xs={12} sm={6} md={3}>
              <WorkProcessSteps
                src={Step1}
                title="UX"
                desp="We do ux research before we start any projects"
              />
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <WorkProcessSteps
                src={Step2}
                title="Wireframing"
                desp="Then Wireframing according to requirements"
              />
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <WorkProcessSteps
                src={Step3}
                title="UI Design"
                desp="Designed according to client's requirements"
              />
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <WorkProcessSteps
                src={Step4}
                title="Design Review"
                desp="After completing the work, live test is done"
              />
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={1} sx={{ width: "85%" }}>
            <Grid xs={12} sm={6} md={3}>
              <WorkProcessSteps
                src={Step1}
                title="Research"
                desp="We do research before we start any projects"
              />
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <WorkProcessSteps
                src={Step2}
                title="Designing"
                desp="Designed according to client's requirements"
              />
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <WorkProcessSteps
                src={Step3}
                title="Development"
                desp="Developed by skilled team developers"
              />
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <WorkProcessSteps
                src={Step4}
                title="Live Testing"
                desp="After completing the work, live test is done"
              />
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}
