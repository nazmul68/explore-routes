import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  const { name, phone } = friend;
  return (
    <div>
      <h2>Everything about the person you want need!</h2>
      <h3>Details About: {name}</h3>
      <p>Call : {phone}</p>
    </div>
  );
};

export default FriendDetails;
