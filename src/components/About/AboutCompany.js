import { Grid, Typography } from "@mui/material";
import React from "react";
import AboutCompanyImg from "../../assets/images/aboutCompanyImg.svg";
export default function AboutCompany() {
  return (
    <>
      <div className="AboutCompanySection">
        <Grid container spacing={1}>
          <Grid sm={6}>
            <div className="AboutCompanyImg">
              <img src={AboutCompanyImg} style={{ width: "85%" }} />
            </div>
          </Grid>
          <Grid sm={6}>
            <div className="AboutCompanyTypo">
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#42C2FF",
                  fontWeight: "600",
                  textTransform: "uppercase",
                }}
              >
                BEST company
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  margin: "3% 0%",
                  width: "30%",
                  color: "#0F52BA",
                  fontWeight: "800",
                  textTransform: "capitalize",
                }}
              >
                About Agile Digital
              </Typography>
              <Typography
                sx={{
                  fontSize: ".7rem",
                  // width: "40%",
                  fontWeight: "400",
                }}
              >
                Agile Digital is a development agency that specializes in
                consulting, application development and consulting in the field
                of new technologies. We combine rigor, quality of work and
                optimized production costs. Founded in 2015, Agile Digital
                started out as a consulting company that worked with large
                accounts such as Microsoft, Canon and Accor. In 2019, Agile
                Digital took off and became a development agency, bringing
                together over 10 years of experience in application development
                and project management in its team. Established in France, the
                agency has launched on the American market since March 2019. We
                offer you to make our expertise available in the management and
                development of your IT projects.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
