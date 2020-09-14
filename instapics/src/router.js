import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreatePage from "./components/CreatePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header title="Labepics" />
      <div
        style={{
          marginTop: "3rem",
          height: "calc(100vh - 6rem)",
        }}
      >
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/accounts/signup" component={SignupPage} />
          <Route exact path="/accounts/login" component={LoginPage} />
          <ProtectedRoute exact path="/create" component={CreatePage} />
          <ProtectedRoute exact path="/:nickname" component={ProfilePage} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
