import React, { useState } from "react";

import { useParams } from "react-router-dom";

import useTagPosts from "../../hooks/useTagPosts";

import { PostFeed } from "./styles";
import Skeleton from "@material-ui/lab/Skeleton";

import PostModal from "../PostModal";

function TagFeedPage() {
  //TODO: essa gambiarra do count
  const { tag, count } = useParams();
  const { posts, getNextPage } = useTagPosts(tag);

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
            hasMore={posts.length < count}
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

export default TagFeedPage;
