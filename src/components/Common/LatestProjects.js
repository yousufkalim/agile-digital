import React from "react";
import SectionHeader from "./SectionHeader";
import { Carousel } from "@trendyol-js/react-carousel";
import KidCab from "../../assets/images/kidcab.svg";
import KC_logo from "../../assets/images/kidcabLogo.png";
import Permispop from "../../assets/images/permispop.svg";
import PP_logo from "../../assets/images/permisLogo.png";
import QB from "../../assets/images/quadrabase.svg";
import QB_logo from "../../assets/images/quadraLogo.png";
import Desine from "../../assets/images/desine.png";
import Desine_Logo from "../../assets/images/desineLogo.png";
import Real_Estate from "../../assets/images/realEstate.png";
import RealEstate_Logo from "../../assets/images/realestateLogo.png";
import EzBox from "../../assets/images/ezBox.png";
import EzBox_Logo from "../../assets/images/ezBoxLogo.png";
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
              <div className="HoverDetailLite">
                <img className="hoverDivLogo" src={KC_logo} />

                <Typography className="HoverDivTypo">
                  Kidcab est la solution de transport pour accompagner vos
                  enfants au quotidien. Kidcab sélectionne des chauffeurs
                  professionnels et expérimentés, formés à l'accompagnement des
                  enfants
                </Typography>
                <button className="HoverDivBtnDark">
                  <BasicModal />
                </button>
              </div>
              <img className="SliderImgs" src={KidCab} alt="1" />
            </div>
            <div className="SliderProject">
              <div className="HoverDetail">
                <img className="hoverDivLogo" src={PP_logo} />

                <Typography className="HoverDivTypo">
                  Vestibulum eget augue consectetur, mattis turpis et, luctus
                  eros. Aenean luctus varius lacus in imperdiet. Curabitur mi
                  ligula, consequat.Vestibulum eget augue consectetur mattis
                  turpis et, luctus eros. Aenean luctus varius lacus in
                  imperdiet. Curabitur mi ligula, consequat
                </Typography>
                <div className="HoverDivBtn">
                  <BasicModal
                    LogoSrc={PP_logo}
                    DividerTheme="#11A283"
                    ModalBtnTheme="#11A283"
                    Heading="Permispop"
                  />
                </div>
              </div>
              <img className="SliderImgs" src={Permispop} alt="2" />
            </div>
            <div className="SliderProject">
              <div className="HoverDetail">
                <img className="hoverDivLogo" src={QB_logo} />

                <Typography className="HoverDivTypo">
                  . Believe direct collaboration with our clients . Essential .
                  Bringing unique and engaging experiences . Life.. Help our
                  clients solve business problems, increase visibility, and
                  achieve unexpected results exclusively from NYC..
                </Typography>
                <button className="HoverDivBtn">
                  <BasicModal
                    LogoSrc={QB_logo}
                    DividerTheme="#FF8616"
                    ModalBtnTheme="#FF8616"
                    Heading="Quadrabase"
                  />
                </button>
              </div>
              <img className="SliderImgs" src={QB} alt="3" />
            </div>
            <div className="SliderProject">
              <div className="HoverDetail">
                <img className="hoverDivLogo" src={Desine_Logo} />

                <Typography className="HoverDivTypo">
                  This website offers an online tailoring experience with free
                  pick-up and delivery in Karachi. We provide stitching services
                  with customizable designs for salwar suits, blouses, kurtas,
                  bottoms, western wear as per customers measurement at the
                  doorstep. Coming Soon for other cities also.
                </Typography>
                <button className="HoverDivBtn">
                  <BasicModal
                    LogoSrc={Desine_Logo}
                    DividerTheme="#CC8E9C"
                    ModalBtnTheme="#CC8E9C"
                    Heading="Design Confection"
                  />
                </button>
              </div>
              <img className="SliderImgs" src={Desine} alt="1" />
            </div>
            <div className="SliderProject">
              <div className="HoverDetail">
                <img className="hoverDivLogo" src={RealEstate_Logo} />

                <Typography className="HoverDivTypo">
                  This website offers an online tailoring experience with free
                  pick-up and delivery in Karachi. We provide stitching services
                  with customizable designs for salwar suits, blouses, kurtas,
                  bottoms, western wear as per customers measurement at the
                  doorstep. Coming Soon for other cities also.
                </Typography>
                <button className="HoverDivBtn">
                  <BasicModal
                    LogoSrc={RealEstate_Logo}
                    DividerTheme="#837C6B"
                    ModalBtnTheme="#837C6B"
                    Heading="Real Estate"
                  />
                </button>
              </div>
              <img className="SliderImgs" src={Real_Estate} alt="1" />
            </div>
            <div className="SliderProject">
              <div className="HoverDetail">
                <img className="hoverDivLogo" src={EzBox_Logo} />

                <Typography className="HoverDivTypo">
                  This website offers an online tailoring experience with free
                  pick-up and delivery in Karachi. We provide stitching services
                  with customizable designs for salwar suits, blouses, kurtas,
                  bottoms, western wear as per customers measurement at the
                  doorstep. Coming Soon for other cities also.
                </Typography>
                <button className="HoverDivBtn">
                  <BasicModal
                    LogoSrc={EzBox_Logo}
                    DividerTheme="#3399FE"
                    ModalBtnTheme="#3399FE"
                    Heading="Box Media"
                  />
                </button>
              </div>
              <img className="SliderImgs" src={EzBox} alt="1" />
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
