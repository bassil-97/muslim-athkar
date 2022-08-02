import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Modal from "../../UI/Modal";

import "./SurahsList.css";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SurahsList({ list }) {
  const [gridView, setGridView] = React.useState(3);
  const [selectedSurah, setSelectedSurah] = React.useState();
  const [openModal, setOpenModal] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchSelectedSurah = async (id) => {
    setIsLoading(true);
    const response = await axios.get(`http://api.alquran.cloud/v1/surah/${id}`);
    if (response) {
      setSelectedSurah(response.data.data);
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpenSurahModel = (id) => {
    fetchSelectedSurah(id);
    setOpenModal(true);
  };

  return (
    <>
      <Modal
        open={openModal}
        surah={selectedSurah}
        isLoading={isLoading}
        handleClose={handleClose}
      />
      <Box className="surahs-list" sx={{ flexGrow: 1 }}>
        <Box sx={{ marginBottom: "20px" }}>
          <IconButton onClick={() => setGridView(3)}>
            <AppsIcon />
          </IconButton>
          <IconButton onClick={() => setGridView(12)}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {list?.data?.surahs.map((el) => (
            <Grid item xs={2} sm={4} md={gridView} key={el.number}>
              <Item className="surah-card" data-aos="zoom-in">
                <div className="surah-card-header">
                  <small className="surah-number">{el.number}</small>
                  <Box>
                    <IconButton>
                      <FavoriteIcon className="favorite-surah-btn" />
                    </IconButton>
                    <IconButton onClick={() => handleOpenSurahModel(el.number)}>
                      <InfoOutlinedIcon />
                    </IconButton>
                  </Box>
                </div>
                <div className="surah-card-body">
                  <h6>{el.englishName}</h6>
                  <small>{el.englishNameTranslation}</small>
                </div>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
