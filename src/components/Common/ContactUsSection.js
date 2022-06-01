import { Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import SectionHeader from "./SectionHeader";
import WhatsappIcon from "../../assets/images/whatsapp.svg";
import EmailIcon from "../../assets/images/emailIcon.svg";
import callicon from "../../assets/images/callIcon.svg";
import Robot from "../../assets/images/notRobort.svg";
import CallIcon from "../../assets/images/callIcon.svg";
import CalendlyIcon from "../../assets/images/calendlyIcon.svg";
import TextField from "@mui/material/TextField";
import emailjs from "emailjs-com";
import { Checkbox } from "@mui/material";
import { motion } from "framer-motion";
export default function ContactUsSection(props) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_p9t3cg6", "template_imi9dne", e.target, "user_Dh0YsMnLOPp5ckc48VOcP").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <>
      {props.ContactUs ? (
        <div className="ContactUsDiv">
          <div>
            <SectionHeader
              width="6%"
              h1="Contact Us"
              h2="Share Your Project/Idea with us!"
              colorH2="#fff"
              colorDesp="#F8F8F8"
              decription="Do you have any question on any concrete project ? Or do you just want to touch base about offshore development and see if it can fit your needs ? 
              Please fill the contact form and we will share our expertize for free. Our Team Member will get back to you within 24 hours. "
            />
          </div>
          <div className="ContactUsGrid">
            <Grid container spacing={1} className="ContactContainerGrid">
              <Grid container sm={8} md={6} className="ContactFormGrid">
                <form onSubmit={sendEmail} className="ContactForm">
                  <div style={{ display: "flex", width: "100%" }}>
                    <Grid xs={12} sm={6}>
                      <input required type="text" name="name" placeholder="Your Name" className="InputField" />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <input required type="email" name="email" placeholder="Email" className="InputField" />
                    </Grid>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Grid xs={12} sm={6}>
                      <input required type="number" name="phone" placeholder="Phone" className="InputField" />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <input required type="text" name="budget" placeholder="Budget" className="InputField" />
                    </Grid>
                  </div>
                  <div>
                    <Grid xs={12}>
                      <textarea
                        required
                        type="text"
                        name="message"
                        placeholder="Type Your Message"
                        className="textField"
                        style={{ marginLeft: "1%" }}
                      />
                    </Grid>
                  </div>
                  <Grid xs={12}>
                    <div
                      className="RobotDiv"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "40%",
                        backgroundColor: "rgba(255, 255, 255, 0.912)",
                        padding: "0.5% 2%",
                        margin: "3% 1%",
                        opacity: ".9",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "60%",
                        }}
                      >
                        <input type="checkbox" />
                        <Typography
                          sx={{
                            marginLeft: "5%",
                            fontSize: ".8rem",
                            fontWeight: "600",
                          }}
                        >
                          I'm not a robot
                        </Typography>
                      </div>
                      <img src={Robot} />
                    </div>
                  </Grid>
                  <Grid xs={3}>
                    <button type="submit" className="ContactUsBtn">
                      Send
                    </button>
                  </Grid>
                </form>
              </Grid>
              <Grid xs={12} sm={10} md={10} className="ContactMedia">
                <a href="mailto:engr.adeelbaig@gmail.com">
                  <div className="ContactMediaDiv">
                    <img className="ContactMediaIcons" src={EmailIcon} />
                    <div className="SocialMediaText">
                      <Typography sx={{ fontSize: "1rem" }}>Email</Typography>
                      <Typography sx={{ fontSize: ".7rem" }}>mailto:engr.adeelbaig@gmail.com</Typography>
                    </div>
                  </div>
                </a>
                <a href="tel:0318-4310639">
                  <div className="ContactMediaDiv">
                    <img className="ContactMediaIcons" src={CalendlyIcon} />
                    <div className="SocialMediaText">
                      <Typography sx={{ fontSize: "1rem" }}>Calendly</Typography>
                      <Typography sx={{ fontSize: ".7rem" }}>Click and join link</Typography>
                    </div>
                  </div>
                </a>
              </Grid>
            </Grid>
          </div>
        </div>
      ) : (
        <div className="ContactsectionDiv">
          <div className="ContactSection_Mob_Header">
            <SectionHeader
              LeftSectionHeader
              width="10%"
              h1="Contact Us"
              h2="Share Your Project/Idea with us!"
              colorH2="#fff"
              colorDesp="#F8F8F8"
              decription="Do you have any question on any concrete project ? Or do you just want to touch base about offshore development and see if it can fit your needs ? 
              Please fill the contact form and we will share our expertize for free. Our Team Member will get back to you within 24 hours. "
            />
          </div>
          <div className="ContactSectionGrid">
            <Grid container spacing={1} className="ContainerGrid">
              <Grid sm={8} md={6} className="SocialMediaMain">
                <div className="ContactSection_Web_Header">
                  <SectionHeader
                    LeftSectionHeader
                    width="10%"
                    h1="Contact Us"
                    h2="Share Your Project/Idea with us!"
                    colorH2="#fff"
                    colorDesp="#F8F8F8"
                    decription="Do you have any question on any concrete project ? Or do you just want to touch base about offshore development and see if it can fit your needs ? 
                    Please fill the contact form and we will share our expertize for free. Our Team Member will get back to you within 24 hours. "
                  />
                </div>
                <div>
                  <a href="mailto:engr.adeelbaig@gmail.com">
                    <div className="SocialMediaDiv">
                      <img className="SocialMediaIcons" src={CalendlyIcon} />
                      <div className="SocialMediaText">
                        <Typography>Schedule Meeting</Typography>
                        <Typography>calendly.com/aigle-digital</Typography>
                      </div>
                    </div>
                  </a>
                  <a href="mailto:engr.adeelbaig@gmail.com">
                    <div className="SocialMediaDiv">
                      <img className="SocialMediaIcons" src={EmailIcon} />
                      <div className="SocialMediaText">
                        <Typography>Email</Typography>
                        <Typography>engr.adeelbaig@gmail.com</Typography>
                      </div>
                    </div>
                  </a>
                  <a href="tel:+923135098197">
                    <div className="SocialMediaDiv">
                      <img className="SocialMediaIcons" src={callicon} />
                      <div className="SocialMediaText">
                        <Typography>Phone</Typography>
                        <Typography>+92-313-509-8197</Typography>
                      </div>
                    </div>
                  </a>
                </div>
              </Grid>
              <Grid container xs={12} sm={8} md={6} className="FormGrid">
                <form onSubmit={sendEmail} className="ContactForm">
                  <div style={{ display: "flex", width: "100%" }}>
                    <Grid xs={12} sm={6}>
                      <input required type="text" name="name" placeholder="Your Name" className="InputField" />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <input required type="email" name="email" placeholder="Email" className="InputField" />
                    </Grid>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Grid xs={12} sm={6}>
                      <input required type="number" name="phone" placeholder="Phone" className="InputField" />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <input required type="text" name="budget" placeholder="Budget" className="InputField" />
                    </Grid>
                  </div>
                  <div>
                    <Grid xs={12}>
                      <textarea required type="text" name="message" placeholder="Type Your Message" className="textField" />
                    </Grid>
                  </div>
                  <Grid xs={12}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "45%",
                        backgroundColor: "rgba(255, 255, 255, 0.912)",
                        padding: "0.5% 2%",
                        margin: "3% 2.5%",
                        opacity: ".9",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "60%",
                        }}
                      >
                        <input type="checkbox" />
                        <Typography
                          sx={{
                            marginLeft: "5%",
                            fontSize: "80%",
                            fontWeight: "600",
                          }}
                        >
                          I'm not a robot
                        </Typography>
                      </div>
                      <img src={Robot} />
                    </div>
                  </Grid>
                  <Grid xs={3}>
                    <button type="submit" className="ContactUsBtn">
                      Send
                    </button>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </>
  );
}
