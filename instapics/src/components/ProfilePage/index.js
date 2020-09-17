import React, { useState } from "react";

import { useParams } from "react-router-dom";

import useProfile from "../../hooks/useProfile";
import useProfilePosts from "../../hooks/useProfilePosts";

import { PostFeed } from "./styles";
import ProfileView from "../ProfileView";
import Skeleton from "@material-ui/lab/Skeleton";

import PostModal from "../PostModal";
import ProfileSkeleton from "../ProfileSkeleton";

function ProfilePage() {
  const { nickname } = useParams();
  const profile = useProfile(nickname);
  const { posts, getNextPage } = useProfilePosts(profile && profile.id);

  const [isPostOpen, setPostOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState();

  const handlePostClick = (post) => () => {
    setSelectedPost(post);
    setPostOpen(true);
  };

  const handlePostClose = () => {
    setSelectedPost();
    setPostOpen(false);
  };

  const postsRender = posts.map((i) => (
    <div
      onClick={handlePostClick(i)}
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
          <PostModal
            post={selectedPost}
            isOpen={isPostOpen}
            handleClose={handlePostClose}
          />
        </div>
      ) : (
        <ProfileSkeleton />
      )}
    </>
  );
}

export default ProfilePage;
