import { Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import SectionHeader from "./SectionHeader";
import WhatsappIcon from "../../assets/images/whatsapp.svg";
import EmailIcon from "../../assets/images/emailIcon.svg";
import CallIcon from "../../assets/images/callIcon.svg";
import TextField from "@mui/material/TextField";
import emailjs from "emailjs-com";
export default function ContactUsSection(props) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p9t3cg6",
        "template_imi9dne",
        e.target,
        "user_Dh0YsMnLOPp5ckc48VOcP"
      )
      .then(
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
              decription="Our Team Member will get back to you within 24 hours."
            />
          </div>
          <div className="ContactUsGrid">
            <Grid container spacing={1} className="ContactContainerGrid">
              <Grid container sm={8} md={6} className="ContactFormGrid">
                <form onSubmit={sendEmail} className="ContactForm">
                  <div style={{ display: "flex", width: "100%" }}>
                    <Grid xs={12} sm={6}>
                      <input
                        name="name"
                        placeholder="Your Name"
                        className="InputField"
                      />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <input
                        name="email"
                        placeholder="Email"
                        className="InputField"
                      />
                    </Grid>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Grid xs={12} sm={6}>
                      <input
                        name="phone"
                        placeholder="Phone"
                        className="InputField"
                      />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <input
                        name="budget"
                        placeholder="Budget"
                        className="InputField"
                      />
                    </Grid>
                  </div>
                  <div>
                    <Grid xs={12}>
                      <textarea
                        name="message"
                        placeholder="Type Your Message"
                        className="textField"
                        style={{ marginLeft: "1%" }}
                      />
                    </Grid>
                  </div>
                  <Grid xs={3}>
                    <button type="submit" className="ContactUsBtn">
                      Send
                    </button>
                  </Grid>
                </form>
              </Grid>
              <Grid sm={10} md={10} className="ContactMedia">
                <div className="ContactMediaDiv">
                  <img className="ContactMediaIcons" src={WhatsappIcon} />
                  <div className="SocialMediaText">
                    <Typography sx={{ fontSize: ".8rem" }}>
                      Goto WhatsApp
                    </Typography>
                  </div>
                </div>
                <div className="ContactMediaDiv">
                  <img className="ContactMediaIcons" src={EmailIcon} />
                  <div className="SocialMediaText">
                    <Typography sx={{ fontSize: ".8rem" }}>Email</Typography>
                    <Typography sx={{ fontSize: ".7rem" }}>
                      contact@falconconsulting.fr
                    </Typography>
                  </div>
                </div>
                <div className="ContactMediaDiv">
                  <img className="ContactMediaIcons" src={CallIcon} />
                  <div className="SocialMediaText">
                    <Typography sx={{ fontSize: ".8rem" }}>Call</Typography>
                    <Typography sx={{ fontSize: ".7rem" }}>
                      + 92 3XX XXXXXXX
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      ) : (
        <div className="ContactsectionDiv">
          <div>
            <SectionHeader
              LeftSectionHeader
              width="6%"
              h1="Contact Us"
              h2="Share Your Project/Idea with us!"
              colorH2="#fff"
              colorDesp="#F8F8F8"
              decription="Our Team Member will get back to you within 24 hours."
            />
          </div>
          <div className="ContactSectionGrid">
            <Grid container spacing={1} className="ContainerGrid">
              <Grid sm={6} className="SocialMediaMain">
                <div className="SocialMediaDiv">
                  <img className="SocialMediaIcons" src={WhatsappIcon} />
                  <div className="SocialMediaText">
                    <Typography>Goto WhatsApp</Typography>
                  </div>
                </div>
                <div className="SocialMediaDiv">
                  <img className="SocialMediaIcons" src={EmailIcon} />
                  <div className="SocialMediaText">
                    <Typography>Email</Typography>
                    <Typography>contact@falconconsulting.fr</Typography>
                  </div>
                </div>
                <div className="SocialMediaDiv">
                  <img className="SocialMediaIcons" src={CallIcon} />
                  <div className="SocialMediaText">
                    <Typography>Call</Typography>
                    <Typography sx={{ fontSize: ".8rem" }}>
                      + 92 3XX XXXXXXX{" "}
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid container sm={6} className="FormGrid">
                <form onSubmit={sendEmail} className="ContactForm">
                  <div style={{ display: "flex", width: "100%" }}>
                    <Grid xs={12} sm={6}>
                      <input
                        name="name"
                        placeholder="Your Name"
                        className="InputField"
                      />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <input
                        name="email"
                        placeholder="Email"
                        className="InputField"
                      />
                    </Grid>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Grid xs={12} sm={6}>
                      <input
                        name="phone"
                        placeholder="Phone"
                        className="InputField"
                      />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <input
                        name="budget"
                        placeholder="Budget"
                        className="InputField"
                      />
                    </Grid>
                  </div>
                  <div>
                    <Grid xs={12}>
                      <textarea
                        name="message"
                        placeholder="Type Your Message"
                        className="textField"
                      />
                    </Grid>
                  </div>
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
