import React from "react";

import "./UserInfoCard.css";

export default function UserInfoCard({ title, surah, icon }) {
  return (
    <div className="last-read-card">
      <div className="last-read-content">
        <small>{title}</small>
        <h5 className="mt-3">-</h5>
        <span className="text-muted">Ayah no: -</span>
      </div>
      {icon}
    </div>
  );
}
