import React from "react";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import StoryReel from "./StoryReel/StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/56998922?v=4"
        message="Wow This works"
        timestamp="Right now"
        userName="Mohit Gupta"
        image="https://avatars.githubusercontent.com/u/56998922?v=4"
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
