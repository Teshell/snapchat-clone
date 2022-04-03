import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Preview from "./components/Preview";
import WebcamCapture from "./components/WebcamCapture";

function App() {
  return (
    <div className="app__body">
      <Router>
        <Routes>
          <Route exact path="/" element={<WebcamCapture />} />
          <Route exact path="/preview" element={<Preview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
