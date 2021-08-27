import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routerConfig from "./router";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        {routerConfig.routes.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
