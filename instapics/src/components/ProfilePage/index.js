import React from "react";

import { useParams } from "react-router-dom";

import useProfile from "../../hooks/useProfile";
import useProfilePosts from "../../hooks/useProfilePosts";

import { PostFeed } from "./styles";
import ProfileView from "../ProfileView";
import Skeleton from "@material-ui/lab/Skeleton";

function ProfilePage() {
  const { nickname } = useParams();
  const profile = useProfile(nickname);
  const { posts, getNextPage } = useProfilePosts(profile && profile.id);

  const postsRender = posts.map((i) => (
    <div
      key={i.postId}
      style={{
        height: 240,
        border: "1px solid green",
        margin: 6,
        padding: 8,
      }}
    >
      <img alt={i.caption} src={i.mediaUrl} height="100%" width="100%" />
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
