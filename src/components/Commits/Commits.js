import React from "react";
import "./Commits.css";
import Close from "../Assests/cancel.png";
import { Redirect } from "react-router-dom";

export default function Commits() {
  return (
    <div className="commits-container scrollbar-hidden">
      <div
        className="close-button"
        onClick={() => {
          <Redirect to="/" />;
        }}
      >
        <img src={Close} alt="close" width="20px" height="20px" />
      </div>
    </div>
  );
}
