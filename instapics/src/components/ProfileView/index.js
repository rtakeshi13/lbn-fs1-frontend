import React from "react";

import { Wrapper, ProfilePicture, CounterWrapper, Counter } from "./styles";
import CollectionsMenu from "../CollectionsMenu";

function ProfileView({ profile }) {
  return (
    <Wrapper>
      <ProfilePicture />

      <CounterWrapper>
        <Counter>
          <div>{profile.postsCount}</div>
          <div>posts</div>
        </Counter>
        <Counter>
          <div>{profile.followersCount}</div>
          <div>followers</div>
        </Counter>
        <Counter>
          <div>{profile.followingCount}</div>
          <div>following</div>
        </Counter>
      </CounterWrapper>

      <CollectionsMenu collections={profile.collections} />
    </Wrapper>
  );
}

export default ProfileView;
