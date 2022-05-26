import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionHeader from "../Common/SectionHeader";
import Agile from "../../assets/images/od_agile.png";
import Experienced from "../../assets/images/od_experienced.png";
import Trained from "../../assets/images/od_trained.png";
import Dedicated from "../../assets/images/od_dedicated.png";
import Right from "../../assets/images/right_arrow.svg";
import Left from "../../assets/images/left_arrow.svg";
import DeveloperSlider from "../Common/DeveloperSlider";

export default function OurDevelopers(props) {
  return (
    <>
      <div className="OurDevelopersMain">
        <div className="OurDevelopersHeader">
          <SectionHeader
            colorH2="#0F52BA"
            h2="OUR DEVELOPERS ARE"
            decription="OUR DEVELOPERS FOR YOUR PROJECTS"
            colorDesp="#404040B2"
          />
        </div>
        <div className="DeveloperSliderDiv">
          <Carousel
            className="DeveloperCarouselDiv"
            show={1}
            swiping={true}
            slide={1}
            infinite={true}
            transition={0.5}
            // autoPlay={true}
            // useArrowKeys={false}
            // width="100%"
            // transitionTime={1}
            rightArrow={<img src={Right} />}
            leftArrow={<img src={Left} />}
          >
            <DeveloperSlider
              src={Agile}
              heading="Agile"
              desp=" We train them in agile management methods so that our partners can take full advantage of them"
            />
            <DeveloperSlider
              src={Experienced}
              heading="Experienced"
              desp="We are Flexible in the search for the ideal  profile and we can can offer you very experienced profiles"
            />
            <DeveloperSlider
              src={Trained}
              heading="Trained"
              desp="We train our developers ourselves by positioning them on internet internet project in order to ensure that we transmit to them the “soft skills” as well as the “hard skills”"
            />
            <DeveloperSlider
              src={Dedicated}
              heading="Dedicated to your projects"
              desp="Our developers work full-time on your projects and our collaborative tools guarantee Transparency regarding the progress of task"
            />
          </Carousel>
        </div>
      </div>
    </>
  );
}
