import React from "react";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

import "./LastRead.css";

export default function LastRead() {
  return (
    <div className="last-read-card">
      <div className="last-read-content">
        <small>last read</small>
        <h5 className="mt-3">test test</h5>
        <span className="text-muted">Ayah no: 1</span>
      </div>
      <LibraryBooksOutlinedIcon className="last-read-icon" />
    </div>
  );
}
