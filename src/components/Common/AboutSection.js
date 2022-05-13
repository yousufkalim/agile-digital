import { Grid, Typography } from "@mui/material";
import React from "react";
import SectionHeader from "./SectionHeader";
import InfoBox from "./InfoBox";
import AboutImg from "../../assets/images/CartoonImg.svg";
export default function AboutSection() {
  return (
    <>
      <div className="AboutSectionDiv">
        <SectionHeader
          LeftSectionHeader
          colorH2="#0F52BA"
          h1="your work is our priority"
          h2="Why choose Falcon Consulting?"
          // decription="This sounds simple, but it is beneficial to your business success."
        />
        <div className="AboutSectionLower">
          <Grid container spacing={1}>
            <Grid xs={12}>
              <div className="AboutTopGrid">
                <InfoBox number="10+" title="Years of Experience" />
                <InfoBox number="100+" title="Number of Employes" />
                <InfoBox number="85" title="Successfull Projects" />
              </div>
            </Grid>
            <Grid container sm={12} className="AboutBottomMain">
              <Grid sm={6}>
                <div className="AboutImg">
                  <img src={AboutImg} />
                </div>
              </Grid>
              <Grid sm={6}>
                <div className="AboutbottomGrid">
                  <InfoBox number="10+" title="Years of Experience" />
                  <InfoBox number="100+" title="Number of Employes" />
                  <InfoBox number="85" title="Successfull Projects" />
                </div>
                <div className="AboutTypo">
                  <div>
                    <Typography
                      sx={{
                        fontSize: "1.4rem",
                        fontWeight: "600",
                        color: "#003B7E",
                      }}
                    >
                      We believe that talent and skills do not have borders
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: ".9rem",
                        fontWeight: "400",
                        color: "#003B7E",
                      }}
                    >
                      We are a human-oriented company, investing in training
                      healthy atmosphere and cooperative management to make sure
                      our employees reach their full potential, and personally
                      develop through their work. Our team is sensitized every
                      day about the importance of quality management, and we
                      strive to put in place a continuous improvement process
                      internally
                    </Typography>
                    <button className="AboutSectionBtn">READ MORE ‘ </button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
