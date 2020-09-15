import React from "react";

import { useParams } from "react-router-dom";

import useProfile from "../../hooks/useProfile";
import usePosts from "../../hooks/usePosts";

import { PostFeed } from "./styles";
import ProfileView from "../ProfileView";
import Skeleton from "@material-ui/lab/Skeleton";

function ProfilePage() {
  const { nickname } = useParams();
  const profile = useProfile(nickname);
  const { posts, getNextPage } = usePosts(profile && profile.id);

  const postsRender = posts.map((i, index) => (
    <div
      style={{
        height: 240,
        border: "1px solid green",
        margin: 6,
        padding: 8,
      }}
      key={i.id}
    >
      <img alt={i.caption} src={i.mediaUrl} height="100%" />
    </div>
  ));

  return (
    <>
      {profile ? (
        <div>
          <ProfileView profile={profile} />
          <PostFeed
            dataLength={posts.length}
            next={getNextPage}
            scrollThreshold="20px"
            hasMore={posts.length < profile.postsCount}
            loader={<Skeleton variant="rect" height={240} animation="wave" />}
          >
            {postsRender}
          </PostFeed>
        </div>
      ) : (
        <Skeleton variant="rect" height={240} animation="wave" />
      )}
    </>
  );
}

export default ProfilePage;
