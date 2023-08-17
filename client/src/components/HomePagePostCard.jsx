import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_POSTS } from "../utils/queries.js";
import { Link } from "react-router-dom";

function UserPosts() {
  const { loading, data } = useQuery(QUERY_ALL_POSTS);

  if (loading) return <p>loading...</p>;

  const posts = data.posts;
  return posts ? (
    posts.map((post) => (
      <Link to={`/post/${post._id}`} key={`${Math.random()*100}${post._id}`} value={post._id}>

        <div className="flex justify-center flex-wrap p-4 rounded-lg">
          <div className="flex md:w-3/4 w-full justify-center mb-6 rounded py-2.5 bg-[#27374D] flex-wrap md:flex-nowrap">
            <div className="mx-4 w-3/4 border-2 border-{#27374D}">
              <div className="border-b-2 text-center border-{#DDE6ED}">
                <p className="text-4xl font-bold inline text-[#DDE6ED]">{post.game.name} </p>
                <p className="text-4xl font-bold inline text-[#DDE6ED]">{post.title}</p>
              </div>
              <p className="text-4xl font-bold inline text-[#DDE6ED]">
                {post.text}
              </p>
            </div>
          </div>
        </div>
      </Link>
      )
    )
  ): null
  }

export default UserPosts
