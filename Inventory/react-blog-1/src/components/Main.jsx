import React from "react";
import { useDispatch, useSelector } from "react-redux";

import PostList from "./blog/PostList";
// import PostEditor from "./blog/PostEditor";

// import { Logout } from "../actions/logged";

const Main = () => {
  const dispatch = useDispatch();
  const postView = useSelect(state => state.postView);

  // const onLogout = () => {
  //   dispatch(Logout());
  // }

  return (
    <>
      {/* <button onClick={onLogout}>Logout</button> */}
      {postView}
      {/* <PostEditor /> */}
    </>
  )
}

export default Main;