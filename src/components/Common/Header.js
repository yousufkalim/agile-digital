// Init
import React from "react";
import { Grid, Typography } from "@mui/material";
import HeaderImg from "../../assets/images/HeaderImg.svg";
import WhatsappIcon from "../../assets/images/whatsappIcon.svg";
import ChatIcon from "../../assets/images/ChatIcon.svg";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
// Component
export default function Header(props) {
  return (
    <Grid className="HeaderMain" container spacing={1}>
      <Grid className="HeaderTypo" xs={12} sm={12} md={5}>
        <Typography
          className={props.HeaderTitleClassName || "HeaderHeading"}
          style={props.TitleStyle}
        >
          {props.Title}
        </Typography>
        <Divider
          sx={{
            width: "35%",
            height: "5px",
            backgroundColor: "#003B7E",
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
            variant={props.btnVariant || "outlined"}
            className={props.btnClassName || "HeaderBtn"}
          >
            {props.btnText}
          </Button>
        ) : (
          ""
        )}
      </Grid>
      <Grid
        className={props.HeaderImgClassName || "HeaderImg"}
        xs={12}
        sm={12}
        md={7}
      >
        <img
          alt={props.ImgAlt || "Header"}
          src={props.ImgSrc || HeaderImg}
          style={props.ImgStyle}
          width={props.ImgWidth || "95%"}
        />
        {props.chatIcons ? (
          <div
            style={{ display: "flex", justifyContent: "right", width: "85%" }}
          >
            <img
              alt="chat"
              src={ChatIcon}
              style={{ width: "8%", marginRight: "5px" }}
            />
            <img alt="whatsapp" src={WhatsappIcon} style={{ width: "8%" }} />
          </div>
        ) : null}
      </Grid>
    </Grid>
  );
}
