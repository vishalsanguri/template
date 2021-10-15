import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Addrepo from "./components/Addrepo/Addrepo";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);
  const [repo, setRepo] = useState([]);
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="App">
            <Header />
            <Main setShow={setShow} setRepo={setRepo} repo={repo} />
            {show ? (
              <Addrepo setShow={setShow} setRepo={setRepo} repo={repo} />
            ) : (
              ""
            )}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
