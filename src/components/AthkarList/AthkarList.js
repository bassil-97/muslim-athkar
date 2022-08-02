import React from "react";
import "./AthkarList.css";
import Chip from "@mui/material/Chip";

export default function AthkarList({ athkar }) {
  return (
    <div className="athkar-list">
      {athkar &&
        athkar.map((el, index) => (
          <div key={index} className="athkar-item" data-aos="zoom-in">
            <h6>{el?.zekr}</h6>
            <small>{el?.description}</small>
            <Chip className="zekr-count" variant="outlined" label={el?.count} />
          </div>
        ))}
    </div>
  );
}
