// Init
import { Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

// Importing Components

// Home Component
export default function BlogHeader() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="BlogHeaderMain"
      >
        <Typography
          className="BlogHeaderTypo"
          sx={{ color: "#263238", fontSize: "1.7rem", fontWeight: "800" }}
        >
          FALCON <span style={{ color: "#0F52BA" }}>BLOGS</span>
        </Typography>
        <Typography
          className="BlogHeaderTypo"
          sx={{
            color: "#263238",
            fontSize: ".8rem",
            fontWeight: "500",
            width: "35%",
            margin: ".5% 0%",
          }}
        >
          Proin consequat consequat erat eget sagittis.
        </Typography>
        <Typography
          className="BlogHeaderTypo"
          sx={{
            color: "#263238",
            fontSize: ".7rem",
            fontWeight: "400",
            width: "35%",
          }}
        >
          Aenean viverra sagittis lacinia. Integer non semper mauris sed lacinia
          mauris. Nam eget fermentum diam. Sed ut suscipit mauris, id imperdiet
          purus.
        </Typography>
        <div
          className="BlogHeaderInput"
          style={{
            width: "40%",
            border: "1px solid rgb(235, 233, 233)",
            boxShadow: "0px 4px 23px rgba(0, 0, 0, 0.1)",
            borderRadius: "35px",
            display: "flex",
            height: "12%",
            marginTop: "1%",
          }}
        >
          <input
            style={{
              width: "100%",
              //   height: "10%",
              border: "none",
              borderRadius: "35px",
              paddingLeft: "5%",
              fontSize: ".7rem",
            }}
            placeholder="Your Email"
          />
          <button
            style={{
              backgroundColor: "#0F52BA",
              border: "none",
              width: "40%",
              fontSize: ".7rem",
              fontWeight: "600",
              borderRadius: "35px",
              padding: "1%",
              color: "white",
            }}
          >
            SUBSCRIBE
          </button>
        </div>
      </motion.div>
    </>
  );
}
