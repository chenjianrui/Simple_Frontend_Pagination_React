import React from "react";

const Pagination = ({ totalPosts, postsPerPage, handleClick }) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const style = {
    display: "flex",
    flexDirction: "col"
  };
  return (
    <ul style={style}>
      {pageNumbers.map((number) => (
        <li
          onClick={() => handleClick(number)}
          key={number}
          style={{ listStyleType: "none", padding: "0 10px" }}
        >
          {number}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
