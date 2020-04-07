import React, {useState, useEffect} from "react";
import {} from "react-router-dom";

import PostEditor from "./PostEditor";

const PostUpdate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {

  });

  return (
    <PostEditor />
  )
}

export default PostUpdate;