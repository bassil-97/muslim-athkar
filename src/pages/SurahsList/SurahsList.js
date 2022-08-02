import React, { useState, useEffect } from "react";
import SurahsList from "../../components/SurahsList/SurahsList";
import Progress from "../../UI/Progress";
import axios from "axios";

export default function Surahs() {
  const [fetchedSurahs, setSurahsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSurahs = () => {
      setIsLoading(true);
      axios
        .get("http://api.alquran.cloud/v1/quran/quran-uthmani")
        .then((response) => {
          if (response.data) {
            setSurahsList(response?.data);
            setIsLoading(false);
          }
        });
    };
    fetchSurahs();
  }, []);

  return (
    <div>
      {isLoading && <Progress />}
      <SurahsList list={fetchedSurahs} />
    </div>
  );
}
