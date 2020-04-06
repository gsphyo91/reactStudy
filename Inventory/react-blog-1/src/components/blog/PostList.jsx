import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"

import { post } from "../../apis/api";

const PostList = () => {
  const [postList, setPostList] = useState([]);

  const getPostList = async () => {
    let posts;
    try {
      ({ data: { results: posts } } = await post.getPostList());
      console.log(posts);
    } catch (err) {
      console.log(err);
    } finally {
      setPostList(posts)
    }
  }

  const deletePost = async (id) => {
    try{
      const {data: {message}} = await post.deletePost(id);
      console.log(message);
      getPostList();
    }catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getPostList();
  }, [])

  return (
    <>
      <p>Post List</p>
      <Link to="/newpost">글쓰기</Link>
      {postList ? postList.map(post => (
        <div key={post.id}>
          <div>
            <p>{post.id}</p>
            <Link to={`/detail/${post.id}`}>{post.title}</Link>
            <p>{post.content}</p>
          </div>
          <button>수정</button>
          <button onClick={() => deletePost(post.id)}>삭제</button>
        </div>
      )) : null
      }
    </>
  )
}

export default PostList;