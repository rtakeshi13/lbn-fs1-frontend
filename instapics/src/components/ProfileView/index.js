import React from "react";

import { Wrapper, ProfilePicture, CounterWrapper, Counter } from "./styles";

function ProfileView({ profile }) {
  return (
    <Wrapper>
      <ProfilePicture />
      {profile.nickname}
      <CounterWrapper>
        <Counter>
          <div>{profile.postsCount}</div>
          <div>posts</div>
        </Counter>
        <Counter>{profile.followersCount}</Counter>
        <Counter>{profile.followingCount}</Counter>
      </CounterWrapper>
    </Wrapper>
  );
}

export default ProfileView;
