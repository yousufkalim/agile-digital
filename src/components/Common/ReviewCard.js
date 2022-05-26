import React from "react";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import img from "../../assets/images/muh_ali.webp";

export default function ReviewCard(props) {
  const { data, dataIndex } = props;
  const { name, review } = data[dataIndex];

  const [value, setValue] = React.useState(4);

  return (
    <div
      style={{
        userSelect: "none",
        maxWidth: "400px",
        height: "516px",
        borderRadius: 15,
      }}
    >
      <div className="ReviewCard">
        <Avatar alt="Remy Sharp" src={props.src || img} sx={{ width: 99, height: 99 }} />
        <Typography sx={{ margin: "6% 0%", fontWeight: 600 }}>{name}</Typography>
        <Rating
          name="simple-controlled"
          // name="size-medium"
          size={props.size || "medium"}
          defaultValue={2}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography
          sx={{
            width: "80%",
            fontSize: ".7rem",
            color: "#454238",
            fontWeight: "400",
            marginTop: "10%",
          }}
        >
          {review}
        </Typography>
      </div>
    </div>
  );
}
