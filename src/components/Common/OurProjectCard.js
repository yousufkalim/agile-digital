// Init
import { Grid, Typography } from "@mui/material";
import React from "react";

// Importing Components
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
// Home Component
export default function OurProjectCard(props) {
  return (
    <>
      {props.Reverse ? (
        <div className="ProjectCardMain">
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
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "1.3rem",
                    fontWeight: "800",
                  }}
                >
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

                <Typography
                  sx={{
                    fontSize: ".7rem",
                    fontWeight: "400",
                    width: "95%",
                    margin: "2% 0%",
                  }}
                >
                  {props.description}
                </Typography>
                <Button className="ProjectCardBtn" variant="outlined">
                  {props.BtnText || "View"}
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div className="ProjectCardMain">
          <Grid container spacing={1} className="ProjectCardContainer1">
            <Grid xs={12} sm={10} md={3}>
              <div className="ProjectCardTypo">
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "1.3rem",
                    fontWeight: "800",
                  }}
                >
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

                <Typography
                  sx={{
                    fontSize: ".7rem",
                    fontWeight: "400",
                    width: "95%",
                    margin: "2% 0%",
                  }}
                >
                  {props.description}
                </Typography>
                <Button className="ProjectCardBtn" variant="outlined">
                  {props.BtnText || "View"}
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
        </div>
      )}
    </>
  );
}
