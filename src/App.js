import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Chats from "./components/Chats";
import Preview from "./components/Preview";
import WebcamCapture from "./components/WebcamCapture";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__body">
          <Routes>
            <Route exact path="/" element={<WebcamCapture />} />
            <Route exact path="/preview" element={<Preview />} />
            <Route exact path="/chats" element={<Chats />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
