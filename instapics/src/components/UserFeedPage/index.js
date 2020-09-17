import React, { useState } from "react";

import useFeedPosts from "../../hooks/useFeedPosts";

import { PostFeed } from "./styles";
import Skeleton from "@material-ui/lab/Skeleton";

import PostModal from "../PostModal";

function UserFeedPage() {
  const { posts, getNextPage } = useFeedPosts();

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
      {posts.length ? (
        <div>
          <PostFeed
            dataLength={posts.length}
            next={getNextPage}
            scrollThreshold="20px"
            hasMore={true}
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
        <Skeleton variant="rect" height={240} animation="wave" />
      )}
    </>
  );
}

export default UserFeedPage;
