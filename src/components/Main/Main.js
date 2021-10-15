import React, { useEffect, useState } from "react";
import "./Main.css";
import {
  Route,
  useRouteMatch,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import Add from "../Assests/plus.png";
import Branches from "../Branches/Branches";
import Issues from "../Issues/Issues";
import Commits from "../Commits/Commits";

export default function Main({ setShow, setRepo, repo }) {
  const { path, url } = useRouteMatch();
  const history = useHistory();
  console.log(path, url);
  const [selectedRepo, setSelectedRepo] = useState([]);
  const [branches, setBranches] = useState([]);
  const [issues, setIssues] = useState([]);
  const [border, setBorder] = useState(true);
  function deleteSelected() {
    if (selectedRepo.length === 0) {
      return;
    } else {
      const newarray = repo.filter((e) => {
        return e.name !== selectedRepo[0].name;
      });
      setRepo(newarray);
      setSelectedRepo([]);
      setIssues([]);
      setBranches([]);
    }
  }
  function pass() {
    history.push("/add");
  }
  var trimmed;
  var trimmed1;
  if (selectedRepo.length !== 0) {
    const selectedrepobranches = selectedRepo[0].branches_url;
    const selectedrepobranches1 = selectedRepo[0].issues_url;
    trimmed = selectedrepobranches.replace("{/branch}", "");
    trimmed1 = selectedrepobranches1.replace("{/number}", "");
    console.log(trimmed);
    console.log(trimmed1);
  }
  useEffect(() => {
    fetch(`${trimmed}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBranches(data);
      });
    fetch(`${trimmed1}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIssues(data);
      });
  }, [selectedRepo]);
  function borderBottom() {
    setBorder(true);
  }
  function borderBottom1() {
    setBorder(false);
  }
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
                    repo.filter((re) => {});
                    setSelectedRepo([repository]);
                  }}
                >
                  <h3> {repository.name}</h3>
                  {repository.description}
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
            className={
              border ? "bottom-border branches-container" : "branches-container"
            }
            onClick={() => {
              borderBottom();
            }}
          >
            Branches
          </div>
          <div
            className={
              border ? "issues-container" : "bottom-border issues-container"
            }
            onClick={() => {
              borderBottom1();
            }}
          >
            Issues
          </div>
        </div>
        <div className="content-holder scrollbar-hidden">
          <Switch>
            <Route exact path="/">
              {border ? (
                <Branches branches={branches} />
              ) : (
                <Issues issues={issues} />
              )}
            </Route>
            <Route path="/add">
              <Commits />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
