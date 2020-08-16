import React, { useState, useEffect } from "react";
import axios from "axios";

const Post = ({ match, history }) => {
  const { id } = match.params;
  const [post, setPost] = useState({});
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(response.data);
    };
    fetchPost();
  }, [id]);
  return <>{post && <div>{post.title}</div>}</>;
};

export default Post;
