import React from 'react';
import TextareaAutosize from "react-textarea-autosize";

const Editor = () => {

  return (
    <div className="container-content">
      <p>Editor</p>
      <TextareaAutosize
        className="input"
        placeholder="Input here"
        onChange={(e) => console.log(e.target.value)}
        autoFocus
      />
    </div>
  )
}

export default Editor;