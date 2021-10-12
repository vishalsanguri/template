import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Addrepo from "./components/Addrepo/Addrepo";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [repo, setRepo] = useState([]);
  return (
    <div className="App">
      <Header />
      <Main setShow={setShow} setRepo={setRepo} repo={repo} />
      {show ? <Addrepo setShow={setShow} setRepo={setRepo} repo={repo} /> : ""}
    </div>
  );
}

export default App;
