// Init
import React from "react";
import { Grid, Typography } from "@mui/material";
import HeaderImg from "../../assets/images/HeaderImg.svg";
import ChatIcon from "../../assets/images/whatsappIcon.svg";
import WhatsappIcon from "../../assets/images/ChatIcon.svg";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

// Component
export default function Header(props) {
  return (
    <Grid className={props.DetailHeader || "HeaderMain"} container spacing={1}>
      <Grid xs={12} sm={12} md={5}>
        <motion.div
          className="HeaderTypo"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Typography
            className={props.HeaderTitleClassName || "HeaderHeading"}
            style={props.TitleStyle}
            color={props.Titlecolor || "#282828"}
          >
            {props.Title}
          </Typography>
          <Divider
            width={props.Dividerwidth || "35%"}
            color={props.DividerBG || "#003B7E"}
            sx={{
              height: "5px",
              borderRadius: "4px",
              margin: "4% 0",
            }}
          />
          <Typography
            className={props.HeaderParaClassName || "HeaderPara"}
            style={props.ParaStyle}
          >
            {props.Description}
          </Typography>
          {props.btn ? (
            <Button
              // color="red"
              variant={props.btnVariant || "outlined"}
              className={props.btnClassName || "HeaderBtn"}
            >
              {props.btnText}
            </Button>
          ) : (
            ""
          )}
        </motion.div>
      </Grid>
      <Grid
        className={props.DetailHeaderImg || "HeaderImg"}
        xs={12}
        sm={12}
        md={7}
      >
        <motion.img
          initial={{ x: 400 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          alt={props.ImgAlt || "Header"}
          src={props.ImgSrc || HeaderImg}
          style={props.ImgStyle}
          width={props.ImgWidth || "95%"}
        />
        {props.chatIcons ? (
          <div
            style={{
              position: "fixed",
              display: "flex",
              flexDirection: "column",
              left: "95%",
              top: "85%",
              width: "40%",
              zIndex: 1000,
            }}
          >
            <a href="https://wa.me/03241013344">
              <img
                alt="whatsapp"
                src={WhatsappIcon}
                style={{ width: "8%", marginBottom: "5px" }}
              />
            </a>
            <a href={`${process.env.REACT_APP_DEMO}/contactus`}>
              <img alt="chat" src={ChatIcon} style={{ width: "8%" }} />
            </a>
          </div>
        ) : null}
      </Grid>
    </Grid>
  );
}
