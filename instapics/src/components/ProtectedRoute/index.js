import React from "react";
import { Route, useHistory } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { path, component } = props;
  const history = useHistory();

  const isLoggedIn = Boolean(localStorage.getItem("labepics"));

  !isLoggedIn && history.replace("/accounts/login");
  return isLoggedIn ? <Route exact path={path} component={component} /> : null;
};

export default ProtectedRoute;
