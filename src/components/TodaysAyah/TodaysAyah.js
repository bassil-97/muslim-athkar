import React from "react";
import Progress from "../../UI/Progress";
import "./TodaysAyah.css";

export default function TodaysAyah({ ayah, isLoading }) {
  return (
    <div className="todays-ayah">
      {isLoading && <Progress />}
      {!isLoading && (
        <>
          <small>ayah of the day</small>
          <h6>{ayah?.data?.text}</h6>
          <hr className="w-100 my-0 bg-light" />
          <small>
            {ayah?.data?.surah?.number} - {ayah?.data?.surah?.englishName}
          </small>
        </>
      )}
    </div>
  );
}
