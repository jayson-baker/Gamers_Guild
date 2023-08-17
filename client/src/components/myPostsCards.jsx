import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_POSTS, QUERY_POST } from "../utils/queries.js";

function MyPosts() {
  const { data } = useQuery(QUERY_ALL_POSTS);
  console.log(data)
  const posts = data?.posts
  console.log(posts)
  return (
    <>
      <div className="flex justify-center flex-wrap p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="flex md:w-3/4 w-full justify-center mb-6 w-fit rounded py-2.5 bg-[#27374D] flex-wrap md:flex-nowrap">
          <p className="text-4xl w-full text-center font-bold inline text-[#DDE6ED]">
            My Posts
          </p>
        </div>
      </div>
      {posts ? (
        <>
          {posts.map((post) => (
            <Link to={`/post/${post._id}`} key={post._id} value={post._id}>

              <div className="flex justify-center flex-wrap p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <div className="flex md:w-3/4 w-full justify-center mb-6 w-fit rounded py-2.5 bg-[#27374D] flex-wrap md:flex-nowrap">
                  <div className="mx-4 w-3/4 border-2 w-fit border-{#27374D}">
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
          ))}
        </>
      ) : null}

    </>
  );
}

export default MyPosts;
