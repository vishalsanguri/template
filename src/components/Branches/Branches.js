import React from "react";
import { useHistory } from "react-router-dom";
import "./Branches.css";
export default function Branches({ branches }) {
  const history = useHistory();
  if (branches.length === 0) {
    return "No Repository selected";
  } else {
    return (
      <>
        {branches.map((branch, i) => {
          return (
            <div
              className="branch-box"
              key={i}
              onClick={() => {
                history.push("/add");
              }}
            >
              {branch.name}
            </div>
          );
        })}
      </>
    );
  }
}
