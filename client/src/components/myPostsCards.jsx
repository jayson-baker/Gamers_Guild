import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_POSTS, QUERY_POST } from "../utils/queries.js";

function MyPosts() {
  const { data } = useQuery(QUERY_ALL_POSTS);
  let posts = useQuery(QUERY_POST);
  console.log(posts)
  //if (loading) return <p>loading...</p>;
 // if (error) return <pr>Error: {error.message}</pr>;
if(data) {
  posts = data.user.posts;
}

  return (
    <>
    <div>
      <h2>My Posts</h2>
      {posts ? (
        <>
      <div name="myposts">
        {posts.map((_id, title) => (
          <Link to={`/post/${_id}`} key={_id} value={_id}>
            {title}
          </Link>
        ))}
      </div>
      </>
): null}
    </div>
  </>
  );
}

export default MyPosts;
