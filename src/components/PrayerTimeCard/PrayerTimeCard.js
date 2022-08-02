import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./PrayerTimeCard.css";

export default function MediaCard({ title, time, timezone, imageURL }) {
  return (
    <Card
      className="prayer-time-card"
      sx={{ minWidth: 800 }}
      data-aos="zoom-in"
    >
      <CardMedia
        component="img"
        height="490"
        image={imageURL}
        alt="green iguana"
        sx={{ objectFit: "fill" }}
      />
      <CardContent className="card-content" data-aos="fade-right">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textTransform: "capitalize", fontWeight: "bold" }}
        >
          {title} prayer time
        </Typography>
        <Typography variant="h3">{time}</Typography>
      </CardContent>
      <Typography variant="h6" className="timezone">
        <i className="bx bxs-map"></i> {timezone}
      </Typography>
    </Card>
  );
}
