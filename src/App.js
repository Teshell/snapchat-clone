import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Chats from "./components/Chats";
import Preview from "./components/Preview";
import ChatView from "./components/ChatView";
import WebcamCapture from "./components/WebcamCapture";

import "./App.css";
import { login, logout, selectUser } from "./features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useEffect } from "react";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            id: authUser.uid,
            username: authUser.displayName,
            profilePic: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img
              className="app__logo"
              src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg"
              alt=""
            />
            <div className="app__body">
              <div className="app__bodyBackground">
                <Routes>
                  <Route exact path="/" element={<WebcamCapture />} />
                  <Route exact path="/preview" element={<Preview />} />
                  <Route exact path="/chats" element={<Chats />} />
                  <Route exact path="/chats/view" element={<ChatView />} />
                </Routes>
              </div>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
