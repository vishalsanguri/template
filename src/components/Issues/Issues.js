import React from "react";
import "./Issues.css";
import Userpng from "../Assests/user.png";
export default function Issues({ issues }) {
  if (issues.length === 0) {
    return "No Issues";
  } else {
    return (
      <>
        {issues.map((issue, i) => {
          return (
            <div key={i} className="issues-content-container">
              <h3>{issue.title}</h3>
              <br />
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={Userpng} alt="user" width="30px" height="100%" />
                <span>{issue.author_association}</span>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
