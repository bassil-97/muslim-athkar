import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularColor() {
  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="success" />
    </div>
  );
}
