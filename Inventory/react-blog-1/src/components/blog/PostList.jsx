import React, { useState, useEffect } from "react";

import { post } from "../../apis/api";

const PostList = () => {
  const [userInfo, setUserInfo] = useState([]);

  const getBookList = async () => {
    let users;
    try {
      ({ data: { userInfo: users } } = await post.getPostList());
    } catch (err) {
      console.log(err);
    } finally {
      setUserInfo(users)
    }
  }

  useEffect(() => {
    getBookList();
  }, [])

  return (
    <>
      <p>Post List</p>
      {userInfo ? userInfo.map(user => <p key={user.id}>{user.email}</p>) : null}
    </>
  )
}

export default PostList;