import React from "react";
import SectionHeader from "./SectionHeader";
import { Carousel } from "@trendyol-js/react-carousel";
import KidCab from "../../assets/images/kidcab.svg";
import Permispop from "../../assets/images/permispop.svg";
import QB from "../../assets/images/quadrabase.svg";
import ReviewCard from "./ReviewCard";
export default function ReviewSection() {
  return (
    <>
      <div>
        <SectionHeader
          colorH2="#0F52BA"
          h1="your feedback matters"
          h2="Client Reviews"
        />
        <div className="ReviewCardSlider">
          <Carousel className="SliderDiv" show={5} slide={1} swiping={true}>
            <ReviewCard
              name="Farhan Shakir"
              review=" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            />
            <ReviewCard
              name="Eman Sheikh"
              review=" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            />
            <ReviewCard
              name="Robert Williams"
              review=" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            />
            <ReviewCard
              name="Salauddin Ayubi"
              review=" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            />
            <ReviewCard
              name=" Mam Zunaira"
              review=" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            />
            <ReviewCard
              name="Adeel Baig"
              review=" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            />
            <ReviewCard
              name="Yousaf Kaleem"
              review=" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            />
            <ReviewCard
              name="Shuja Naqvi"
              review=" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            />
          </Carousel>
        </div>
      </div>
    </>
  );
}
