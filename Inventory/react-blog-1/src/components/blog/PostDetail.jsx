import React, { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";

import {post} from "../../apis/api";

const PostDetail = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getDetail = async id => {
    let postInfo
    try{
      ({data: {results: postInfo}} = await post.detailPost(id));
      console.log(postInfo);
    }catch(err){
      console.log(err);
    }finally{
      setTitle(postInfo.title);
      setContent(postInfo.content);
    }
  }

  useEffect(() => {
    const postId = location.pathname.split('/')[2];
    getDetail(postId);
  }, [location]);
  
  return (
    <>
      <p>Detail Page</p>
      <p>Title: {title}</p>
      <p>Content: {content}</p>
      <Link to="/"><button>뒤로</button></Link>
    </>
  )
}

export default PostDetail;