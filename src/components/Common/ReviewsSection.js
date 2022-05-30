import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import ReviewCard from "./ReviewCard";
import { StackedCarousel, ResponsiveContainer } from "react-stacked-center-carousel";

export default function ReviewSection() {
  const ref = React.useRef();
  const [data, setData] = useState([
    {
      name: "Farhan Shakir",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      name: "Eman Sheikh",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      name: "Robert Williams",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      name: "Robert Williams",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      name: "Salauddin Ayubi",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      name: " Mam Zunaira",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      name: "Adeel Baig",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      name: "Yousaf Kaleem",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      name: "Shuja Naqvi",
      review:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ]);

  return (
    <>
      <div className="ReviewSectionMain">
        <SectionHeader colorH2="#0F52BA" h1="your feedback matters" h2="Client Reviews" />
        <div className="ReviewCardSlider">
          <div className="ReviewSliderContainer">
            <div className="fade-left"></div>
            <ResponsiveContainer
              carouselRef={ref}
              render={(parentWidth, carouselRef) => {
                let currentVisibleSlide = 5;
                if (parentWidth <= 1440) currentVisibleSlide = 3;
                if (parentWidth <= 720) currentVisibleSlide = 1;
                return (
                  <StackedCarousel
                    ref={carouselRef}
                    data={data}
                    carouselWidth={parentWidth}
                    slideWidth={
                      currentVisibleSlide === 5
                        ? parentWidth / 5.2
                        : currentVisibleSlide === 3
                        ? parentWidth / 4
                        : parentWidth / 2
                    }
                    slideComponent={ReviewCard}
                    maxVisibleSlide={5}
                    currentVisibleSlide={currentVisibleSlide}
                    useGrabCursor={true}
                  />
                );
              }}
            />
            <div className="fade-right"></div>
          </div>
        </div>
      </div>
    </>
  );
}
