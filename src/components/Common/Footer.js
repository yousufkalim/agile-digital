import { Divider, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/images/logo.png";
import FB from "../../assets/images/FooterFB.svg";
import Twitter from "../../assets/images/FooterTwitter.svg";
import LinkedIn from "../../assets/images/FooterLinkedIn.svg";
import WhatsApp from "../../assets/images/FooterWhatsApp.svg";
import { motion } from "framer-motion";
export default function (props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="FooterMain"
      >
        <div className="FooterDiv">
          <div className="FooterLeft">
            <a href={`${process.env.REACT_APP_DEMO}/`} className="LogoTitle" style={{ padding: "5% 0%" }}>
              Agile Digital Services
            </a>
            <Typography className="FooterTypo" sx={{ color: "#282828", opacity: "50%", margin: "3% 0%" }}>
              The services are provided at a flat rate, or according to a determined daily rate, according to your preference. In
              both cases, we guarantee you a quality service at a very competitive price.
            </Typography>
            <div className="IconsDiv">
              <img className="FooterIcons" src={FB} />
              {/* <img className="FooterIcons" src={Twitter} /> */}
              <img className="FooterIcons" src={LinkedIn} />
              <img className="FooterIcons" src={WhatsApp} />
            </div>
          </div>
          <div className="FooterRight">
            <div className="FooterList">
              <Typography className="FooterListHeading" sx={{ fontWeight: "700", opacity: "50%", marginBottom: "40%" }}>
                Pages
              </Typography>
              <ul>
                <li>About</li>
                <li>Services</li>
                <li>Our projects</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="FooterList">
              <Typography className="FooterListHeading" sx={{ fontWeight: "700", opacity: "50%", marginBottom: "23%" }}>
                Focus
              </Typography>
              <ul>
                <li>UI/UX Developmemt</li>
                <li>App Development</li>
                <li>Web Development</li>
                <li>Website Design</li>
              </ul>
            </div>
            <div className="FooterList">
              <Typography className="FooterListHeading" sx={{ fontWeight: "700", opacity: "50%", marginBottom: "28%" }}>
                Privacy
              </Typography>
              <ul>
                <li>Terms of Service</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      <Divider />
      <div className="CopyRightDiv">
        <Typography sx={{ fontSize: "80%", fontWeight: "700" }}>
          This site is owned and operated by
          <span style={{ color: "#003B7E" }}> Adeel Ilyas Baig</span>
        </Typography>
      </div>
    </>
  );
}
