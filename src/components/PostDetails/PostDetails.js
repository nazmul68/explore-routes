import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, userId } = post;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/friend/${userId}`);
  };
  return (
    <div>
      <h2>Detail about post-{id}</h2>
      <p>{title}</p>
      <button onClick={handleNavigate}>Get the author</button>
    </div>
  );
};

export default PostDetails;
