import React, { useContext } from 'react'
import Post from './Post'
import { Context_of_post_list } from '../../store/Post_list_store';


function PostList() {
  const {postlist} = useContext(Context_of_post_list);
  return (
    <div className='d-flex justify-content-around'>
      {postlist.map((post) => < Post key={post.id} post={post} />)}
    </div>
  )
}

export default PostList