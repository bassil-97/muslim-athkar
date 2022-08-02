import axios from "axios";
import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import DownloadingIcon from "@mui/icons-material/Downloading";
import PrayerTimeCard from "../../components/PrayerTimeCard/PrayerTimeCard";
import "./PrayerTimes.css";

export default function PrayerTimes() {
  const [fetchedPrayerTimes, setFetchedPrayerTimes] = useState([]);
  const [meta, setMeta] = useState();
  const [date, setDate] = useState();
  const [cityName, setCityName] = useState("amman");
  const [isLoading, setIsLoading] = useState(false);

  const fetchPrayerTimes = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://api.aladhan.com/v1/timingsByAddress?address=${cityName}`
    );
    if (response) {
      setFetchedPrayerTimes(response.data);
      setMeta(response.data.data.meta);
      setDate(response.data.data.date);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPrayerTimes();
  }, []);

  return (
    <div className="prayer-times">
      <div className="prayer-time-header">
        <small>{date?.readable}</small>
        <div>
          <TextField
            id="standard-basic"
            variant="standard"
            onChange={(e) => setCityName(e.target.value)}
          />
          <IconButton onClick={fetchPrayerTimes}>
            <DownloadingIcon />
          </IconButton>
        </div>
      </div>
      <div className="w-100 prayer-time-wrapper">
        <PrayerTimeCard
          title="fajr"
          time={fetchedPrayerTimes?.data?.timings?.Fajr}
          timezone={meta?.timezone}
          imageURL={
            "https://cdn.dribbble.com/users/2499460/screenshots/7348479/media/eac84366b20a3511d90ea6b1a97dc4e8.png?compress=1&resize=1000x750&vertical=top"
          }
        />
        <PrayerTimeCard
          title="dhuhr"
          time={fetchedPrayerTimes?.data?.timings?.Dhuhr}
          timezone={meta?.timezone}
          imageURL={
            "https://cdn.dribbble.com/users/1100029/screenshots/5873887/media/8f2398cbd2f10dd3f56e356b2b75d693.png?compress=1&resize=800x600&vertical=top"
          }
        />
        <PrayerTimeCard
          title="asr"
          time={fetchedPrayerTimes?.data?.timings?.Asr}
          timezone={meta?.timezone}
          imageURL={
            "https://cdn.dribbble.com/users/1044811/screenshots/3545733/ramadan_vibes-01-01.png?compress=1&resize=800x600&vertical=top"
          }
        />
        <PrayerTimeCard
          title="maghrib"
          time={fetchedPrayerTimes?.data?.timings?.Maghrib}
          timezone={meta?.timezone}
          imageURL={
            "https://cdn.dribbble.com/users/5716533/screenshots/15329647/media/60bb154b2ae4b5bf406ac1905c2b5a0c.png?compress=1&resize=1000x750&vertical=top"
          }
        />
        <PrayerTimeCard
          title="isha"
          time={fetchedPrayerTimes?.data?.timings?.Isha}
          timezone={meta?.timezone}
          imageURL={
            "https://cdn.dribbble.com/users/1655260/screenshots/12229280/media/af85a66dcf83ff27de4745afb7f4864a.jpg?compress=1&resize=1000x750&vertical=top"
          }
        />
      </div>
    </div>
  );
}
