import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { Context_of_post_list } from '../../store/Post_list_store';
import Welcome from './Welcome';
import { useLoaderData } from 'react-router-dom';
// import LoadingSpinner from '../LoadingSpinner';


function PostList() {
  const { postlist, fetching } = useContext(Context_of_post_list);
  // const postlist = useLoaderData();
  return (
    <>
      <div className="container">
        <div className="row justify-content-around">
          {fetching && <LoadingSpinner />}
          {!fetching && postlist == 0 && <Welcome />}
          
          {!fetching && postlist.map((post) => < Post key={post.id} post={post} />
          )} </div>
      </div>

{/* <div className="container">
        <div className="row justify-content-around">
          {postlist == 0 && <Welcome />}
          
          {postlist.map((post) => < Post key={post.id} post={post} />
          )} </div>
      </div> */}

    </>
  )
}

export const postLoader = () => {
 return fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
       return data.posts
      });
}
export default PostList