import React from "react";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import StoryReel from "./StoryReel/StoryReel";
import "./Feed.css";
import archita from "./archita.jpeg";
import mohit from './mohit.jpeg';
import group from './group.jpeg';
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
        image={archita}
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
