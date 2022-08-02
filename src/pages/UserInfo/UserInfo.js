import React, { useState, useEffect } from "react";
import axios from "axios";
import TodaysAyah from "../../components/TodaysAyah/TodaysAyah";
import UserInfoCard from "../../UI/UserInfoCard";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import HeadphonesIcon from "@mui/icons-material/Headphones";

import "./UserInfo.css";

export default function UserInfo() {
  const [ayah, setAyah] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(1, 6236);

  useEffect(() => {
    const fetchAyah = () => {
      setIsLoading(true);
      axios
        .get(`http://api.alquran.cloud/v1/ayah/${rndInt}/en.asad`)
        .then((response) => {
          setAyah(response.data);
          setIsLoading(false);
        });
    };
    fetchAyah();
  }, []);

  return (
    <div className="user-info">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-12 mb-4">
          <TodaysAyah ayah={ayah} isLoading={isLoading} />
        </div>
        <hr className="mt-4 mb-0 w-75" />
        <div className="col-lg-12">
          <UserInfoCard
            title={"last read"}
            icon={<LibraryBooksOutlinedIcon className="last-read-icon" />}
          />
        </div>
        <hr className="mt-4 mb-0 w-75" />
        <div className="col-lg-12">
          <UserInfoCard
            title={"last listened"}
            icon={<HeadphonesIcon className="last-read-icon" />}
          />
        </div>
      </div>
    </div>
  );
}
