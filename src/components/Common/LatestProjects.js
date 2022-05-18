import React from "react";
import SectionHeader from "./SectionHeader";
import { Carousel } from "@trendyol-js/react-carousel";
import KidCab from "../../assets/images/kidcab.svg";
import KC_logo from "../../assets/images/kidcabLogo.png";
import Permispop from "../../assets/images/permispop.svg";
import PP_logo from "../../assets/images/permisLogo.png";
import QB from "../../assets/images/quadrabase.svg";
import QB_logo from "../../assets/images/quadraLogo.png";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import BasicModal from "./BasicModal";

export default function LatestProjects(props) {
  return (
    <>
      <div className="LatestProjectDiv">
        <SectionHeader
          width="40%"
          h1="A Project offers a challenge"
          h2="Latest Projects"
          // decription="This sounds simple, but it is beneficial to your business success."
        />

        <motion.div
          // animate={{ x: [1500, 0] }}
          // transition={{ duration: 2 }}
          initial={{ x: 1000, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="LatestProjectsSlider"
        >
          <Carousel className="SliderDiv" show={4.5} slide={2} swiping={true}>
            <div className="SliderProject">
              <div className="HoverDetail">
                <img className="hoverDivLogo" src={KC_logo} />

                <Typography className="HoverDivTypo">
                  Believe direct collaboration with our clients. Essential.
                  Bringing unique and engaging experiece. Life.. Help our
                  clients solve busniness problems, increse visibility, and
                  achieve unexpected results exclusively from NYC...
                </Typography>
                <button className="HoverDivBtn">
                  <BasicModal />
                </button>
              </div>
              <img className="SliderImgs" src={KidCab} alt="1" />
            </div>
            <div className="SliderProject">
              <div className="HoverDetail">
                <img className="hoverDivLogo" src={PP_logo} />

                <Typography className="HoverDivTypo">
                  Believe direct collaboration with our clients. Essential.
                  Bringing unique and engaging experiece. Life.. Help our
                  clients solve busniness problems, increse visibility, and
                  achieve unexpected results exclusively from NYC...
                </Typography>
                <button className="HoverDivBtn">
                  <BasicModal
                    LogoSrc={PP_logo}
                    Heading="Permispop"
                    DividerBG="#f2851e"
                  />
                </button>
              </div>
              <img className="SliderImgs" src={Permispop} alt="2" />
            </div>
            <div className="SliderProject">
              <div className="HoverDetail">
                <img className="hoverDivLogo" src={QB_logo} />

                <Typography className="HoverDivTypo">
                  Believe direct collaboration with our clients. Essential.
                  Bringing unique and engaging experiece. Life.. Help our
                  clients solve busniness problems, increse visibility, and
                  achieve unexpected results exclusively from NYC...
                </Typography>
                <button className="HoverDivBtn">
                  <BasicModal
                    LogoSrc={QB_logo}
                    Heading="Quadrabase"
                    DividerBG="#9D3C64"
                  />
                </button>
              </div>
              <img className="SliderImgs" src={QB} alt="3" />
            </div>
            <div className="SliderProject">
              <div className="HoverDetail">
                <img className="hoverDivLogo" src={KC_logo} />

                <Typography className="HoverDivTypo">
                  Believe direct collaboration with our clients. Essential.
                  Bringing unique and engaging experiece. Life.. Help our
                  clients solve busniness problems, increse visibility, and
                  achieve unexpected results exclusively from NYC...
                </Typography>
                <button className="HoverDivBtn">
                  <BasicModal />
                </button>
              </div>
              <img className="SliderImgs" src={KidCab} alt="1" />
            </div>
            <div className="SliderProject">
              <div className="HoverDetail">
                <img className="hoverDivLogo" src={PP_logo} />

                <Typography className="HoverDivTypo">
                  Believe direct collaboration with our clients. Essential.
                  Bringing unique and engaging experiece. Life.. Help our
                  clients solve busniness problems, increse visibility, and
                  achieve unexpected results exclusively from NYC...
                </Typography>
                <button className="HoverDivBtn">
                  {" "}
                  <BasicModal
                    LogoSrc={PP_logo}
                    Heading="Permispop"
                    DividerBG="#f2851e"
                  />
                </button>
              </div>
              <img className="SliderImgs" src={Permispop} alt="2" />
            </div>
            <div className="SliderProject">
              <div className="HoverDetail">
                <img className="hoverDivLogo" src={QB_logo} />

                <Typography className="HoverDivTypo">
                  Believe direct collaboration with our clients. Essential.
                  Bringing unique and engaging experiece. Life.. Help our
                  clients solve busniness problems, increse visibility, and
                  achieve unexpected results exclusively from NYC...
                </Typography>
                <button className="HoverDivBtn">
                  <BasicModal
                    LogoSrc={QB_logo}
                    Heading="Quadrabase"
                    DividerBG="#9D3C64"
                  />
                </button>
              </div>
              <img className="SliderImgs" src={QB} alt="3" />
            </div>
            <div className="SliderProject">
              <div className="HoverDetail">
                <img className="hoverDivLogo" src={QB_logo} />

                <Typography className="HoverDivTypo">
                  Believe direct collaboration with our clients. Essential.
                  Bringing unique and engaging experiece. Life.. Help our
                  clients solve busniness problems, increse visibility, and
                  achieve unexpected results exclusively from NYC...
                </Typography>
                <button className="HoverDivBtn">
                  <BasicModal
                    LogoSrc={PP_logo}
                    Heading="Permispop"
                    DividerBG="#f2851e"
                  />
                </button>
              </div>
              <img className="SliderImgs" src={KidCab} alt="4" />
            </div>
          </Carousel>
        </motion.div>
        {props.ProjectsSummary ? (
          <div className="ProjectsCompletedDiv">
            <div className="Left">
              <Typography
                sx={{
                  fontFamily: "Montserrat !important",
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                10+
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Years of Excellence
              </Typography>
            </div>
            <div className="center">
              <Typography
                sx={{
                  fontFamily: "Montserrat !important",
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                85+
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Project Completed
              </Typography>
            </div>
            <div className="Right">
              <Typography
                sx={{
                  fontFamily: "Montserrat !important",
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                100+
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Customer Satisfaction
              </Typography>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
