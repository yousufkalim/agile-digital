import { Grid } from "@mui/material";
import React from "react";
import SectionHeader from "./SectionHeader";
import Client1 from "../../assets/images/1.svg";
import Client2 from "../../assets/images/2.svg";
import Client3 from "../../assets/images/3.svg";
import Client4 from "../../assets/images/4.svg";
import Client5 from "../../assets/images/5.svg";
import Client6 from "../../assets/images/6.svg";
import Client7 from "../../assets/images/7.svg";
import Client8 from "../../assets/images/8.svg";
import Client9 from "../../assets/images/9.svg";
import Client10 from "../../assets/images/10.svg";
export default function ClientSection() {
  return (
    <>
      <div className="ClientSectionMain">
        <SectionHeader
          width="40%"
          h1="SINCERELY YOURS"
          h2="Some Amazing Partners We Worked With"
          // decription="This sounds simple, but it is beneficial to your business success."
        />
        <div className="ClientsDiv">
          <Grid container spacing={1} className="ClientsGrid">
            <Grid className="ClientLogoGrid" xs={6} sm={3}>
              <img className="ClientLogo" src={Client6} alt="client" />
            </Grid>
            <Grid className="ClientLogoGrid" xs={6} sm={3}>
              <img className="ClientLogo" src={Client7} alt="client" />
            </Grid>
            <Grid className="ClientLogoGrid" xs={6} sm={3}>
              <img className="ClientLogo" src={Client4} alt="client" />
            </Grid>
            <Grid className="ClientLogoGrid" xs={6} sm={3}>
              <img className="ClientLogo" src={Client5} alt="client" />
            </Grid>
            {/* <Grid xs={4} sm={3} md={2.4}>
              <img className="ClientLogo" src={Client1} alt="client" />
            </Grid>
            <Grid xs={4} sm={3} md={2.4}>
              <img className="ClientLogo" src={Client2} alt="client" />
            </Grid>
            <Grid xs={4} sm={3} md={2.4}>
              <img className="ClientLogo" src={Client3} alt="client" />
            </Grid>
            <Grid xs={4} sm={3} md={2.4}>
              <img className="ClientLogo" src={Client8} alt="client" />
            </Grid>
            <Grid xs={4} sm={3} md={2.4}>
              <img className="ClientLogo" src={Client9} alt="client" />
            </Grid>
            <Grid xs={4} sm={3} md={2.4}>
              <img className="ClientLogo" src={Client10} alt="client" />
            </Grid> */}
          </Grid>
        </div>
      </div>
    </>
  );
}
