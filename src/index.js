import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Post from "./Post";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/post/:id" component={Post} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
