import React from "react";
import SectionHeader from "./SectionHeader";
import { Carousel } from "@trendyol-js/react-carousel";
import KidCab from "../../assets/images/kidcab.svg";
import Permispop from "../../assets/images/permispop.svg";
import QB from "../../assets/images/quadrabase.svg";
import Slider from "./Slider";
import { Typography } from "@mui/material";

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

        <div className="LatestProjectsSlider">
          <Carousel className="SliderDiv" show={4} slide={2} swiping={true}>
            <img className="SliderImgs" src={KidCab} alt="1" />
            <img className="SliderImgs" src={Permispop} alt="2" />
            <img className="SliderImgs" src={QB} alt="3" />
            <img className="SliderImgs" src={KidCab} alt="4" />
            <img className="SliderImgs" src={Permispop} alt="5" />
            <img className="SliderImgs" src={QB} alt="5" />
            <img className="SliderImgs" src={KidCab} alt="5" />
            <img className="SliderImgs" src={Permispop} alt="5" />
            <img className="SliderImgs" src={QB} alt="5" />
            <img className="SliderImgs" src={QB} alt="5" />
          </Carousel>
        </div>
        {props.ProjectsSummary ? (
          <div className="ProjectsCompletedDiv">
            <div className="Left">
              <Typography
                sx={{
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
