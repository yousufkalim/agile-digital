import { Typography } from "@mui/material";
import React from "react";
import Tick1 from "../../assets/images/MA1.svg";
import Tick2 from "../../assets/images/MA2.svg";
import Tick3 from "../../assets/images/MA3.svg";
import AgencyArrow from "../../assets/images/AgencyArrow.svg";

export default function ModernAgencySection() {
  return (
    <>
      <div className="ModernAgencyDiv">
        <div className="AgencyTypo">
          <Typography
            sx={{ fontSize: "1.2rem", fontWeight: "800", color: "#FFF" }}
          >
            We Are Modern IT Agency
          </Typography>
          <Typography
            sx={{
              fontSize: ".6rem",
              fontWeight: "500",
              color: "#F8F8F8",
              opacity: "80%",
            }}
          >
            Accessible price, with no compromise on the Quality!
          </Typography>
        </div>
        <div className="HistorySumary">
          <div className="HistoryMain">
            <div className="HistoryDiv">
              <div className="HistoryImgDiv">
                <img className="HistoryImg" src={Tick1} />
              </div>

              <Typography
                className="HistoryTypoH"
                sx={{ color: "#fff", fontSize: "1.1rem", marginTop: "3%" }}
              >
                10+
              </Typography>
              <Typography
                className="HistoryTypoP"
                sx={{ color: "#fff", fontSize: ".8rem" }}
              >
                Years of Excellence
              </Typography>
            </div>
            <div className="ArrowMain">
              <img src={AgencyArrow} />
            </div>
          </div>
          <div className="HistoryMain">
            <div className="HistoryDiv">
              <div className="HistoryImgDiv">
                <img className="HistoryImg" src={Tick2} />
              </div>

              <Typography
                className="HistoryTypoH"
                sx={{ color: "#fff", fontSize: "1.1rem", marginTop: "3%" }}
              >
                85
              </Typography>
              <Typography
                className="HistoryTypoP"
                sx={{ color: "#fff", fontSize: ".8rem" }}
              >
                Successfull Projects
              </Typography>
            </div>
            <div className="ArrowMain">
              <img src={AgencyArrow} />
            </div>
          </div>
          <div className="HistoryMain">
            <div className="HistoryDiv">
              <div className="HistoryImgDiv">
                <img className="HistoryImg" src={Tick3} />
              </div>
              <Typography
                className="HistoryTypoH"
                sx={{ color: "#fff", fontSize: "1.1rem", marginTop: "3%" }}
              >
                100%
              </Typography>
              <Typography
                className="HistoryTypoP"
                sx={{ color: "#fff", fontSize: ".8rem" }}
              >
                Client satisfication
              </Typography>
            </div>
            <div className="ArrowMain">
              <img src={AgencyArrow} />
            </div>
          </div>
          <div className="HistoryMain">
            <div className="HistoryDiv">
              <div className="HistoryImgDiv">
                <img className="HistoryImg" src={Tick1} />
              </div>
              <Typography
                className="HistoryTypoH"
                sx={{ color: "#fff", fontSize: "1.1rem", marginTop: "3%" }}
              >
                3
              </Typography>
              <Typography
                className="HistoryTypoP"
                sx={{ color: "#fff", fontSize: ".8rem" }}
              >
                Office Loocations
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
