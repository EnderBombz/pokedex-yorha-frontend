import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Main from "../view/main";
import List from "../view/list";

export default () => {
  return (
    <>
      <Route path="/" component={List} />
    </>
  );
};
