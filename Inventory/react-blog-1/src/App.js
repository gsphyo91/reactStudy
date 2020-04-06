import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PostList from "./components/blog/PostList";
import PostEditor from "./components/blog/PostEditor";
import PostDetail from "./components/blog/PostDetail";

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
        <Route path="/updatePost/:id" exact>
        </Route>
        <Route path="/detail">
          <PostDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
