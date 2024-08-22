import React, { useContext } from 'react';
import { Context_of_post_list } from '../../store/Post_list_store';
function Post({ post }) {
    const { deletepost } = useContext(Context_of_post_list)
    return (
        <>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 card mt-3">
                <div className="card-body">
                    <h5 className="card-title">{post.title} </h5>
                    <p className="card-text">{post.body}</p>
                </div>
                {post.tags.map((tag) => <ul key={tag} className="list-group list-group-flush">
                    <li className="list-group-item">{tag}</li>
                </ul>)}
                <div className="card-body">
                    <a className="btn btn-primary card-link text-white" onClick={() => { deletepost(post.id) }}>Delete Post</a>
                </div>
            </div>

        </>
    )
}

export default Post