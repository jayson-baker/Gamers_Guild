import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_POSTS } from "../utils/queries.js";

function userPosts() {
  const { loading, data } = useQuery(QUERY_ALL_POSTS);

  if (loading) return <p>loading...</p>;
  if (error) return <pr>Error: {error.message}</pr>;

  const posts = data.posts;

  return (
    <div>
      <h2>Posts</h2>
      <select name="post">
        {posts.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default userPosts;
