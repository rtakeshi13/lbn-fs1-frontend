import React from "react";

import { Wrapper, ProfileViewSkeleton, CollectionsWrapper } from "./styles";

function ProfileSkeleton() {
  return (
    <Wrapper>
      <ProfileViewSkeleton
        variant="circle"
        width={"5rem"}
        height={"5rem"}
        animation="wave"
      />
      <ProfileViewSkeleton variant="rect" height={"3rem"} animation="wave" />
      <CollectionsWrapper>
        <ProfileViewSkeleton
          variant="circle"
          width={"3rem"}
          height={"3rem"}
          animation="wave"
        />
        <ProfileViewSkeleton
          variant="circle"
          width={"3rem"}
          height={"3rem"}
          animation="wave"
        />
        <ProfileViewSkeleton
          variant="circle"
          width={"3rem"}
          height={"3rem"}
          animation="wave"
        />
      </CollectionsWrapper>
    </Wrapper>
  );
}

export default ProfileSkeleton;
