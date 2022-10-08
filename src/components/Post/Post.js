import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const { id, title, body } = post;
  //   console.log(post);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{body}</p>
      <Link to={`/post/${id}`}>
        <button>show details</button>
      </Link>
      <br />
      <button onClick={handleNavigate}>show details2</button>
    </div>
  );
};

export default Post;
