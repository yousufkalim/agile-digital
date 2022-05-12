import { Grid, Typography } from "@mui/material";
import React from "react";
import ServiceProvidedCard from "../Common/ServiceProvidedCard";
import SectionHeader from "../Common/SectionHeader";
import UiDev from "../../assets/images/UiDev.svg";
import WebDev from "../../assets/images/WebDev.svg";
import SoftDev from "../../assets/images/SoftDev.svg";
import OnDemand from "../../assets/images/OnDemand.svg";

export default function ServiceProvided() {
  return (
    <>
      <div className="ServiceProvidedDiv">
        <SectionHeader
          h1="our aim provide better service"
          h2="Services We Provide"
          // decription="This sounds simple, but it is beneficial to your business success."
        />
        <Grid container spacing={1} className="CardGridMain">
          <Grid
            container
            sx={12}
            md={9}
            className="CardGridMain"
            // data-aos="fade-right"
          >
            <Grid
              xs={10}
              sm={5}
              md={5.7}
              lg={5.3}
              xl={5.2}
              sx={{ margin: "1%" }}
            >
              <ServiceProvidedCard
                CardTitle="Mobile Application Development"
                // CardImgSrc={UiDev}
              />
            </Grid>

            <Grid
              xs={10}
              sm={5}
              md={5.7}
              lg={5.3}
              xl={5.2}
              sx={{ margin: "1%" }}
            >
              <ServiceProvidedCard
                CardTitle="Website Development"
                // CardImgSrc={WebDev}
                // width="80%"
              />
            </Grid>
            <Grid
              xs={10}
              sm={5}
              md={5.7}
              lg={5.3}
              xl={5.2}
              sx={{ margin: "1%" }}
            >
              <ServiceProvidedCard
                CardTitle="Software Development"
                CardImgSrc={SoftDev}
              />
            </Grid>
            <Grid
              xs={10}
              sm={5}
              md={5.8}
              lg={5.3}
              xl={5.2}
              sx={{ margin: "1%" }}
            >
              <ServiceProvidedCard
                CardTitle="On Demand Developers"
                CardImgSrc={OnDemand}
              />
            </Grid>
          </Grid>
          <Grid
            md={2.7}
            lg={2.7}
            xl={2.7}
            sx={{ margin: "1%" }}
            className="VerticleCard"
          >
            <ServiceProvidedCard
              verticleCard
              CardImgSrc={UiDev}
              CardTitle="UI/UX Development"
            />
          </Grid>
        </Grid>

        {/* <ServiceProvidedCard CardTitle="Mobile Application Development" /> */}
      </div>
    </>
  );
}
