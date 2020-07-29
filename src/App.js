import React from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Languages from "./components/Languages/Languages";
import Tools from "./components/Tools/Tools";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import "./App.css";
import {Grid} from "@material-ui/core";

function App() {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <MyNavbar />
        </Grid>
        <Grid item xs={10}>
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
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
