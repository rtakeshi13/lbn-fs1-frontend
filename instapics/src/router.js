import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import LandingPage from "./components/LandingPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/accounts/signup" component={SignupPage} />
        <Route exact path="/accounts/login" component={LoginPage} />
        <ProtectedRoute exact path="/:nickname" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
