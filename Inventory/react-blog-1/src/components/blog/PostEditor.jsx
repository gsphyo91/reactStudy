import React, { useState } from "react";

const PostEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
  }

  return (
    <>
      <p>Post Editor</p>
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