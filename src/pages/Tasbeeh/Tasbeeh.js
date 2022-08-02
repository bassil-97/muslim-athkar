import React from "react";
import TasbeehItem from "../../components/TasbeehItem/TasbeehItem";
import "./Tasbeeh.css";

export default function Tasbeeh() {
  return (
    <div className="tasbeeh-items-wrapper">
      <TasbeehItem zekr1 />
      <TasbeehItem zekr2 />
      <TasbeehItem zekr3 />
      <TasbeehItem zekr4 />
    </div>
  );
}
