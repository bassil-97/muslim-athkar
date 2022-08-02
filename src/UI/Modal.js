import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import SurahInfoCard from "./SurahInfoCard";
import Progess from "../UI/Progress";

import "./Modal.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  return (
    <div style={{ width: "100% !important" }}>
      <Dialog
        open={props?.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props?.handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>{props?.surah?.englishName}</DialogTitle>
        <DialogContent className="dialog-surah-info-wrapper">
          {props?.isLoading && <Progess />}
          {!props?.isLoading && (
            <>
              <SurahInfoCard numOfAyahs={props?.surah?.numberOfAyahs} />
              <SurahInfoCard englishName={props?.surah?.englishName} />
              <SurahInfoCard
                englishNameTranslation={props?.surah?.englishNameTranslation}
              />
              <SurahInfoCard name={props?.surah?.name} />
              <SurahInfoCard order={props?.surah?.number} />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={props?.handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
