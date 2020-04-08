import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import 'antd/dist/antd.css';
import './App.css';

import PostList from "./components/blog/PostList";
import PostEditor from "./components/blog/PostEditor";
import PostDetail from "./components/blog/PostDetail";
import Editor from "./components/blog/Editor";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <PostList />
        </Route>
        <Route path="/newpost" exact>
          <PostEditor />
        </Route>
        <Route path="/updatePost">
          <PostEditor />
        </Route>
        <Route path="/detail">
          <PostDetail />
        </Route>
        <Route path="/editor">
          <Editor />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
