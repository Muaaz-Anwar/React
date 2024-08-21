import React, { useContext, useRef } from 'react'
import { Context_of_post_list } from '../../store/Post_list_store';
function CreatePost() {
  const { createpost } = useContext(Context_of_post_list)
  const title = useRef();
  const para = useRef();
  const tag1  = useRef();
  const handlesubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000);
    const posttitle = title.current.value;
    const postpara = para.current.value;
    const posttag = tag1.current.value.split(" ");
    createpost(id, posttitle, postpara, posttag);
    title.current.value = "";
    para.current.value = "";
    tag1.current.value = "";
  }
  return (
    <div className='container-fluid'>
      <form className="row g-3" onSubmit={handlesubmit}>
        <div className="col-md-4">
          <label htmlFor="validationServer01" className="form-label">Title</label>
          <input type="text" ref={title} className="form-control" id="validationServer01" placeholder="Mark" required />
        </div>
        <div className="col-md-8">
          <label htmlFor="validationServer02" className="form-label">Paragraph</label>
          <input type="text" ref={para} className="form-control" id="validationServer02" placeholder="this is a paragraph for testing" required />
        </div>
        <div className="col-md-12">
          <label htmlFor="validationServer03" className="form-label">Tag 1</label>
          <input type="text" ref={tag1} className="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" placeholder="Trip London Enjoying" required />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type='submit'>Add Post</button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost