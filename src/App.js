import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Chats from "./components/Chats";
import Preview from "./components/Preview";
import ChatView from "./components/ChatView";
import WebcamCapture from "./components/WebcamCapture";

import "./App.css";
import { selectUser } from "./features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Routes>
              <Route exact path="/" element={<WebcamCapture />} />
              <Route exact path="/preview" element={<Preview />} />
              <Route exact path="/chats" element={<Chats />} />
              <Route exact path="/chats/view" element={<ChatView />} />
            </Routes>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
