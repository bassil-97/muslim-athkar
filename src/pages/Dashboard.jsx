import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Home from "./Home/Home";
import Athkar from "./Athkar/Athkar";
import PrayerTimes from "./PrayerTimes/PrayerTimes";
import Tasbeeh from "./Tasbeeh/Tasbeeh";

export default function Dashboard() {

  return (
    <div>
        <Sidebar />
        <div className="home">
            <Routes>
            <Route index path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/athkar" element={<Athkar />} />
              <Route path="/prayer-times" element={<PrayerTimes />} />
              <Route path="/tasbeeh" element={<Tasbeeh />} />
            </Routes>
        </div>
    </div>
  )
}
