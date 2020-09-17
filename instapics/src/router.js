import React from "react";
import styled from "styled-components";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreatePostPage from "./components/CreatePostPage";
import CreateCollectionPage from "./components/CreateCollectionPage";
import SearchPage from "./components/SearchPage";
import NotFound from "./components/NotFoundPage";
import TagFeedPage from "./components/TagFeedPage";
import UserFeedPage from "./components/UserFeedPage";

const BodyWrapper = styled.div`
  margin-top: 3rem;
  height: calc(100vh - 3rem);
`;

const Router = () => {
  return (
    <BrowserRouter>
      <Header back title="Labepics" />
      <BodyWrapper>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/accounts/signup" component={SignupPage} />
          <Route exact path="/accounts/login" component={LoginPage} />
          <ProtectedRoute exact path="/create" component={CreatePostPage} />
          <ProtectedRoute exact path="/search" component={SearchPage} />
          <ProtectedRoute
            exact
            path="/collection/create"
            component={CreateCollectionPage}
          />
          <ProtectedRoute exact path="/feed" component={UserFeedPage} />
          <ProtectedRoute exact path="/:nickname" component={ProfilePage} />
          <ProtectedRoute
            exact
            path="/tags/:tag/:count"
            component={TagFeedPage}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </BodyWrapper>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
