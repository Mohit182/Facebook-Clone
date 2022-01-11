import React from "react";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import StoryReel from "./StoryReel/StoryReel";
import "./Feed.css";

import mohit from './mohit.jpeg';
import group from './group.jpeg';
import group2 from './group2.jpeg';
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/56998922?v=4"
        message="Lit"
        timestamp="Right now"
        userName="Mohit Gupta"
        image={mohit}
      />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/56998922?v=4"
        message="Lit"
        timestamp="Right now"
        userName="Mohit Gupta"
        image={group2}
      />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/56998922?v=4"
        message="Lit"
        timestamp="Right now"
        userName="Mohit Gupta"
        image={group}
      />
    </div>
  );
}

export default Feed;
