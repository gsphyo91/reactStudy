import React from "react";
// import { useDispatch } from "react-redux";

// import PostList from "./blog/PostList";
import PostEditor from "./blog/PostEditor";

// import { Logout } from "../actions/logged";

const Main = () => {
  // const dispatch = useDispatch();

  // const onLogout = () => {
  //   dispatch(Logout());
  // }

  return (
    <>
      {/* <button onClick={onLogout}>Logout</button> */}
      {/* <PostList /> */}
      <PostEditor />
    </>
  )
}

export default Main;