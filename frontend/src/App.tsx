import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AllPosts } from "./pages/AllPosts";
import { CreatePost } from "./pages/CreatePost";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={CreatePost} path="/add-post" />
        <Route component={AllPosts} path="/" />
      </Switch>
    </Router>
  );
}

export default App;
