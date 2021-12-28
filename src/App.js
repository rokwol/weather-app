import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Search from "./Search";
import Current from "./Current";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Source from "./Source";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weatherWrap">
          <div className="weatherApp">
            <Search />
            <Current />
            <Temperature />
            <Forecast />
          </div>
          <Source />
        </div>
      </div>
    </div>
  );
}
