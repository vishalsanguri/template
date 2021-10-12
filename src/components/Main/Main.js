import React, { useState } from "react";
import "./Main.css";
import Add from "../Assests/plus.png";

export default function Main({ setShow, setRepo, repo }) {
  const [selectedRepo, setSelectedRepo] = useState([]);
  const [border, setBorder] = useState(false);
  function deleteSelected() {
    if (selectedRepo.length === 0) {
      return;
    } else {
      const newarray = repo.filter((e) => {
        return e.name !== selectedRepo[0].name;
      });
      setRepo(newarray);
      setSelectedRepo([]);
    }
  }
  function borderBottom() {}
  return (
    <div className="main">
      <div className="repo-container scrollbar-hidden">
        {repo.length !== 0
          ? repo.map((repository, i) => {
              return (
                <div
                  className="unique-repo scrollbar-hidden"
                  key={i}
                  onClick={() => {
                    setSelectedRepo([repository]);
                  }}
                >
                  {repository.name}
                </div>
              );
            })
          : "No Repository yet"}
        <div
          className="add-repo-btn"
          onClick={() => {
            setShow(true);
          }}
        >
          <img src={Add} alt="add" width="15px" height="15px" />
        </div>
      </div>
      <div className="repo-details scrollbar-hidden">
        <div className="delete-repo">
          <button
            className="delete-btn"
            onClick={() => {
              deleteSelected();
            }}
          >
            Delete
          </button>
        </div>
        <div className="flex">
          <div
            className="branches-container"
            onClick={() => {
              borderBottom();
            }}
          >
            Branches
          </div>
          <div className="issues-container">Issues</div>
        </div>
        <div className="content-holder">content</div>
      </div>
    </div>
  );
}
