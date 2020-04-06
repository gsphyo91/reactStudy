import React, { useState } from "react";
import {Link, useHistory} from "react-router-dom";

import { post } from "../../apis/api"

const PostEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  const handleTitleChenge = (e) => {
    setTitle(e.target.value);
  }

  const blockEnterKey = (e) => {
    if(e.key === 'Enter') e.preventDefault();
  }

  const handleContentChange = (e) => {
    setContent(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(title, content);
    newPost(title, content);
  }

  const newPost = async (title, content) => {
    try{
      const result = await post.newPost(title, content);
      console.log(result);
      history.push("/");
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <p>Post Editor</p>
      <Link to="/">뒤로</Link>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" value={title} onChange={handleTitleChenge} onKeyPress={blockEnterKey} placeholder="제목" autoFocus required />
        </div>
        <div>
          <textarea cols="50" rows="5" value={content} onChange={handleContentChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default PostEditor;