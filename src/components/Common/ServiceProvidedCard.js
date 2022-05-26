import { Typography } from "@mui/material";
import React from "react";
import MobileApp from "../../assets/images/MobileApp.svg";
import ArrowForward from "../../assets/images/arrowForward.svg";
import { motion } from "framer-motion";
export default function ServiceProvidedCard(props) {
  return (
    <>
      {props.verticleCard ? (
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            // display: "flex",
            width: "100%",
            border: "1px solid #003B7E",
            borderRadius: "20px",
          }}
        >
          <div>
            <Typography
              sx={{
                fontSize: "1.6rem",
                color: "#003B7E",
                fontWeight: "600",
                margin: "10% 0% 10% 10%",
              }}
            >
              {props.CardTitle}
            </Typography>
            <a href={props.href}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20%",
                }}
              >
                <button
                  style={{
                    border: "none",
                    backgroundColor: "#F8F8F8",
                    margin: "10% 0% 10% 10%",
                    color: "#003B7E",
                    fontWeight: 600,
                  }}
                >
                  {props.BtnText ? props.BtnText : "Get Details"}
                </button>
                <img
                  style={{
                    marginLeft: "2%",
                  }}
                  src={ArrowForward}
                />
              </div>
            </a>
          </div>
          <div style={{ width: "100%" }}>
            <img src={props.CardImgSrc || MobileApp} style={{ width: "100%" }} />
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: -400 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid #003B7E",
            borderRadius: "20px",
            height: "100%",
          }}
        >
          <div style={{ width: "40%" }}>
            <Typography
              sx={{
                fontSize: "1.6rem",
                color: "#003B7E",
                fontWeight: "600",
                margin: "10% 0% 10% 10%",
                height: "60%",
              }}
            >
              {props.CardTitle}
            </Typography>
            <a href={props.href}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  // marginTop: "30%",
                }}
              >
                <button
                  style={{
                    border: "none",
                    backgroundColor: "#F8F8F8",
                    margin: "10% 0% 10% 10%",
                    color: "#003B7E",
                    fontWeight: 600,
                  }}
                >
                  {props.BtnText ? props.BtnText : "Get Details"}
                </button>
                <img
                  style={{
                    marginLeft: "2%",
                  }}
                  src={ArrowForward}
                />
              </div>
            </a>
          </div>
          <div style={{ objectFit: "fill" }}>
            <img
              src={props.CardImgSrc || MobileApp}
              // style={{  }}
              width={props.width || "100%"}
              // width="200"
            />
          </div>
        </motion.div>
      )}
    </>
  );
}
