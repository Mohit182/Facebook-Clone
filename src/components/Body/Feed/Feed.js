import React, { useEffect, useState } from "react";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import StoryReel from "./StoryReel/StoryReel";
import "./Feed.css";
import group from "./group.jpeg";
import group2 from "./group2.jpeg";
import db from "../../../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapShot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
      {/* <Post
        profilePic="https://avatars.githubusercontent.com/u/56998922?v=4"
        message="Lit"
        timestamp="Right now"
        userName="Mohit Gupta"
        image="https://drive.google.com/file/d/1K_voDqbTRu2rqaqeXQ92121buKmniMQT/view?usp=sharing"
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
      /> */}
    </div>
  );
}

export default Feed;
