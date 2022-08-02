import React from "react";
import "./SurahInfoCard.css";

export default function SurahInfoCard({
  numOfAyahs,
  englishName,
  name,
  order,
  englishNameTranslation,
}) {
  if (numOfAyahs)
    return (
      <div className="surah-card-info">
        <small>number of ayahs</small>
        <h6>{numOfAyahs}</h6>
      </div>
    );

  if (englishName)
    return (
      <div className="surah-card-info">
        <small>name in english</small>
        <h6>{englishName}</h6>
      </div>
    );

  if (order)
    return (
      <div className="surah-card-info">
        <small>order in quran</small>
        <h6>{order}</h6>
      </div>
    );

  if (name)
    return (
      <div className="surah-card-info">
        <small>name in arabic</small>
        <h6>{name}</h6>
      </div>
    );

  if (englishNameTranslation)
    return (
      <div className="surah-card-info">
        <small>english name translation</small>
        <h6>{englishNameTranslation}</h6>
      </div>
    );
}
