import React, { useState } from "react";
import "./Addrepo.css";

export default function Addrepo({ setShow, setRepo, repo }) {
  const [data, setData] = useState({ owner: "", reponame: "" });
  async function fetchdata() {
    await fetch(`https://api.github.com/repos/${data.owner}/${data.reponame}`)
      .then((res) => res.json())
      .then((data) => setRepo([...repo, data]));
    setData({ ...data, ...{ owner: "", reponame: "" } });
    setShow(false);
  }
  return (
    <>
      <div className="main-container-data">
        <div className="add-container">
          <p>Add New Repository</p>
          <br />
          <label>Owner/ Organization</label>
          <input
            type="text"
            name="owner"
            onChange={(e) => {
              setData({ ...data, owner: e.target.value });
            }}
          />
          <label>Repository Name</label>
          <input
            type="text"
            name="reponame"
            onChange={(e) => {
              setData({ ...data, reponame: e.target.value });
            }}
          />
          <button className="repo-add-final" onClick={fetchdata}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}
