import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  

  const submitHandler = (event) => {
    event.preventDefault();
    setInput("");
    
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src='https://media-exp1.licdn.com/dms/image/C5603AQHNhBCBXUVv6A/profile-displayphoto-shrink_100_100/0/1626243167444?e=1647475200&v=beta&t=xrw9v_alG3F2tr8wpeYpJYaIvrTpFxXVjOJmE8RnkWA'/>
        <form>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="messageSender__input"
            placeholder="What's on your mind, Mohit Gupta? "
          />
          
          <button
            className="messageSender__button"
            onClick={submitHandler}
            type="sumbit"
          >
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
