import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

import Posts from "./Posts";
import Post from "./Post";
import Pagination from "./Pagination";

export default function App({ history, match }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
      setLoading(false);
    };
    setCurrentPage(history.location.search.split("=")[1] || 1);
    fetchData();
  }, []);
  const handleClick = (number) => {
    setCurrentPage(number);
    history.push(`/?page=${number}`);
  };
  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <div className="App">
      <ul>{<Posts loading={loading} posts={currentPosts} />}</ul>
      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        handleClick={handleClick}
      />
    </div>
  );
}
