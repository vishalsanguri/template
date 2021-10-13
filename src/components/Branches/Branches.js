import React from "react";
import "./Branches.css";
export default function Branches({ branches }) {
  if (branches.length === 0) {
    return "No Repository selected";
  } else {
    return (
      <>
        {branches.map((branch, i) => {
          return (
            <div className="branch-box" key={i}>
              {branch.name}
            </div>
          );
        })}
      </>
    );
  }
}
