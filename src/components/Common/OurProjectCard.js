// Init
import { Grid, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
// Importing Components
import PP_logo from "../../assets/images/permisLogo.png";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import BasicModal from "./BasicModal";
// Home Component
export default function OurProjectCard(props) {
  return (
    <>
      {props.Reverse ? (
        <motion.div
          initial={{ x: 500 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="ProjectCardMain"
        >
          <Grid container spacing={1} className="ProjectCardContainer2">
            <Grid xs={12} sm={10} md={9}>
              <img
                className="ProjectCardImg"
                width={props.width || "100%"}
                src={props.src}
              />
            </Grid>
            <Grid xs={12} sm={10} md={3}>
              <div className="ProjectCardTypo">
                <Typography className="ProjectCardTitle">
                  {props.title || "Permispop."}
                </Typography>
                <Divider
                  className="ProjectCardDivider"
                  width={props.width || "20%"}
                  sx={{
                    height: "3px",
                    backgroundColor: "#0F52BA",
                    borderRadius: "4px",
                    margin: ".7% 0",
                  }}
                />

                <Typography className="ProjectCardDesp">
                  {props.description}
                </Typography>
                <Button className="ProjectCardBtn" variant="outlined">
                  <BasicModal
                    ModalBtntextColor="#003B7E"
                    ModalBtnTheme={props.ModalBtnTheme || "transparent"}
                    ModalBtnText="View"
                    LogoSrc={props.LogoSrc}
                    Heading={props.ModalHeading}
                    Dividerwidth={props.Dividerwidth || "12%"}
                    DividerTheme={props.DividerTheme}
                    SubH1={props.SubH1}
                    para1={props.para1}
                    SubH2={props.SubH1}
                    para2={props.para2}
                    SubH3={props.SubH1}
                    para3={props.para3}
                  />
                </Button>
              </div>
            </Grid>
          </Grid>
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: -500 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="ProjectCardMain"
        >
          <Grid container spacing={1} className="ProjectCardContainer1">
            <Grid xs={12} sm={10} md={3}>
              <div className="ProjectCardTypo">
                <Typography className="ProjectCardTitle">
                  {props.title || "Permispop."}
                </Typography>
                <Divider
                  className="ProjectCardDivider"
                  width={props.width || "20%"}
                  sx={{
                    height: "3px",
                    backgroundColor: "#0F52BA",
                    borderRadius: "4px",
                    margin: ".7% 0",
                  }}
                />

                <Typography className="ProjectCardDesp">
                  {props.description}
                </Typography>

                <Button className="ProjectCardBtn" variant="outlined">
                  <BasicModal
                    ModalBtntextColor="#003B7E"
                    ModalBtnTheme={props.ModalBtnTheme || "transparent"}
                    ModalBtnText="View"
                    LogoSrc={props.LogoSrc}
                    Heading={props.ModalHeading}
                    Dividerwidth={props.Dividerwidth || "12%"}
                    DividerTheme={props.DividerTheme}
                    SubH1={props.SubH1}
                    para1={props.para1}
                    SubH2={props.SubH1}
                    para2={props.para2}
                    SubH3={props.SubH1}
                    para3={props.para3}
                  />
                </Button>
              </div>
            </Grid>
            <Grid xs={12} sm={10} md={9}>
              <img
                className="ProjectCardImg"
                width={props.width || "100%"}
                src={props.src}
              />
            </Grid>
          </Grid>
        </motion.div>
      )}
    </>
  );
}
