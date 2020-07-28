import React from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import "./App.css";
import Languages from "./components/Languages/Languages";
import Tools from "./components/Tools/Tools";

function App() {
  return (
    <div className="page">
      <div className="head">
        <Header />
      </div>
      <div className="panelline">
        <div className="panel">
          <Intro />
        </div>
        <div className="panel">
          <Languages />
        </div>
        <div className="panel">
          <Tools />
        </div>
      </div>
    </div>
  );
}

export default App;
