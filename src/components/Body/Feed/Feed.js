import React, { useEffect, useState } from "react";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import StoryReel from "./StoryReel/StoryReel";
import "./Feed.css";
import db from "../../../firebase";

import { collection, query, getDocs, orderBy } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const feedFunction = async () => {
      const feedQuery = query(collection(db, "posts"),orderBy("timeStamp","desc"));
      const querySnapshot = await getDocs(feedQuery);
      querySnapshot.forEach(
        setPosts(
          querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
    };
    feedFunction();
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
          timestamp={post.data.timeStamp}
          userName={post.data.userName}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
