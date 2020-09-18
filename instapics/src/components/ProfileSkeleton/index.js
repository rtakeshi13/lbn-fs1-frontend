import React from "react";

import {
  Wrapper,
  AvatarSkeleton,
  CountersSkeleton,
  CollectionSkeleton,
  CollectionsWrapper,
} from "./styles";

function ProfileSkeleton() {
  return (
    <Wrapper>
      <AvatarSkeleton
        variant="circle"
        width={"5rem"}
        height={"5rem"}
        animation="wave"
      />
      <CountersSkeleton variant="rect" height={"3rem"} animation="wave" />
      <CollectionsWrapper>
        <CollectionSkeleton
          variant="circle"
          width={"3rem"}
          height={"3rem"}
          animation="wave"
        />
        <CollectionSkeleton
          variant="circle"
          width={"3rem"}
          height={"3rem"}
          animation="wave"
        />
        <CollectionSkeleton
          variant="circle"
          width={"3rem"}
          height={"3rem"}
          animation="wave"
        />
        <CollectionSkeleton
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
