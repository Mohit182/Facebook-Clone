import React from "react";
import MessageSender from "./MessageSender/MessageSender";
import StoryReel from "./StoryReel/StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
    </div>
  );
}

export default Feed;
