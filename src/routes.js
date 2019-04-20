import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./store";
import App from "./components/App";
import Header from "./components/Header";

const RootRouter = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route exect path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
);

export default RootRouter;
