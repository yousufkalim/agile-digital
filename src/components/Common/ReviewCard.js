import React from "react";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import img from "../../assets/images/muh_ali.jpg";
export default function ReviewCard(props) {
  const [value, setValue] = React.useState(2);
  return (
    <>
      <div className="ReviewCardMain">
        <div className="ReviewCard">
          <Avatar
            alt="Remy Sharp"
            src={props.src || img}
            sx={{ width: 66, height: 66 }}
          />
          <Typography sx={{ margin: "5% 0%" }}>{props.name}</Typography>
          <Rating
            name="simple-controlled"
            // name="size-medium"
            size={props.size || "small"}
            defaultValue={2}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography
            sx={{
              width: "90%",
              fontSize: ".6rem",
              color: "#454238",
              fontWeight: "400",
              marginTop: "10%",
            }}
          >
            {props.review}
          </Typography>
        </div>
      </div>
    </>
  );
}
