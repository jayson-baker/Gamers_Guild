import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POST } from "../utils/queries.js";

function myPosts() {
  const { loading, data } = useQuery(QUERY_POST);

  if (loading) return <p>loading...</p>;
  if (error) return <pr>Error: {error.message}</pr>;

  const posts = data.posts;

  return (
    <div>
      <h2>Posts</h2>
      <select name="myposts">
        {posts.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default myPosts;
