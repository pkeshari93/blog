import React from "react";
import { IndexRoute, Router, Route, hashHistory } from "react-router";
import About from "./components/About";
import App from "./components/App";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import Contact from "./components/Contact";
import Coffee from "./components/Coffee";

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Coffee} />
      <Route path={"home"} component={Coffee} />
      <Route path={"blog"} component={Blog} />
      <Route path={"/post/:id"} component={BlogPost} />
      <Route path={"about"} component={About} />
      <Route path={"contact"} component={Contact} />
    </Route>
  </Router>
);
