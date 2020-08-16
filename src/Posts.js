import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Posts = ({ loading, posts }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {posts.map((post) => (
        <Link key={post.id} to={`/post/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </>
  );
};

export default Posts;
