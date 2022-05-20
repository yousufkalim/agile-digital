import { Grid, Typography } from "@mui/material";
import React from "react";
import SectionHeader from "./SectionHeader";
import InfoBox from "./InfoBox";
import AboutImg from "../../assets/images/about_section.png";
import AboutInfo2 from "../../assets/images/aboutSec_2.svg";
import AboutInfo3 from "../../assets/images/aboutSec_3.svg";
import AboutInfo4 from "../../assets/images/aboutSec_4.svg";
import AboutInfo5 from "../../assets/images/aboutSec_5.svg";
import AboutInfo6 from "../../assets/images/aboutSec_6.svg";
import { motion } from "framer-motion";

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
              <motion.div
                initial={{ x: -400 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="AboutTopGrid"
              >
                <InfoBox number="8+" title="Years of Experience" />
                <InfoBox
                  src={AboutInfo2}
                  number="60+"
                  title="Number of Employes"
                />
                <InfoBox
                  src={AboutInfo3}
                  number="85"
                  title="Successfull Projects"
                />
              </motion.div>
            </Grid>
            <Grid container sm={12} className="AboutBottomMain">
              <Grid sm={6}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                  className="AboutImg"
                >
                  <img src={AboutImg} />
                </motion.div>
              </Grid>
              <Grid sm={6}>
                <motion.div
                  initial={{ x: 400 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="AboutbottomGrid"
                >
                  <InfoBox
                    src={AboutInfo4}
                    number="3"
                    title="Number of Offices"
                  />
                  <InfoBox src={AboutInfo5} title="External Tools Built" />
                  <InfoBox
                    src={AboutInfo6}
                    title="100% Improvement and Customer focused"
                  />
                </motion.div>
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
                    <a href={`${process.env.REACT_APP_DEMO}/about`}>
                      <button className="AboutSectionBtn">READ MORE ‘ </button>
                    </a>
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
