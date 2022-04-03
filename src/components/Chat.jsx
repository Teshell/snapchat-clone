import ReactTimeago from "react-timeago";

import { useDispatch } from "react-redux";
import { Avatar } from "@material-ui/core";

import StopRondedIcon from "@material-ui/icons/StopRounded";

import "./Chat.css";
import { selectImage } from "../features/appSlice";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const Chat = ({ id, username, timestamp, read, imageUrl, profilePic }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));

      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        { merge: true }
      );

      navigate("/chats/view");
    }
  };

  return (
    <div onClick={open} className="chat">
      <Avatar className="chat__avatar" src={profilePic} />

      <div className="chat__info">
        <h4>{username}</h4>
        <p>
          Tap to view -{" "}
          <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>

      {!read && <StopRondedIcon className="chat__readIcon" />}
    </div>
  );
};

export default Chat;
