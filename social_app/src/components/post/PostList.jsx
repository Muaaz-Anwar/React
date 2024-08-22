import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { Context_of_post_list } from '../../store/Post_list_store';
import Welcome from './Welcome';
import LoadingSpinner from '../LoadingSpinner';


function PostList() {
  const { postlist, createmultiposts } = useContext(Context_of_post_list);
  const [fetching, setfetching] = useState(true);

    useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;
      fetch('https://dummyjson.com/posts', {signal})
      .then(res => res.json())
      .then(data => {
        createmultiposts(data.posts)
        setfetching(false)
      });
      return () => {
        controller.abort();
      }
    }, []);
    
  

  return (
    <>
      <div className="container">
        <div className="row justify-content-around">
          {fetching && <LoadingSpinner />}
          {!fetching && postlist == 0 && <Welcome />}
          
          {!fetching && postlist.map((post) => < Post key={post.id} post={post} />
          )} </div>
      </div>

    </>
  )
}

export default PostList