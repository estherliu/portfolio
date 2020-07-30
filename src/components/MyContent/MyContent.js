import React from "react";
import Tools from "../Tools/Tools";
import Header from "../Header/Header";
import Languages from "../Languages/Languages";
import Intro from "../Intro/Intro";
import "./MyContent.css";

function MyContent() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default MyContent;
