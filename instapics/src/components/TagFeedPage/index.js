import React from "react";

import { useParams } from "react-router-dom";

import useTagPosts from "../../hooks/useTagPosts";

import { PostFeed } from "./styles";
import Skeleton from "@material-ui/lab/Skeleton";

function TagFeedPage() {
  const { tag, count } = useParams();
  const { posts, getNextPage } = useTagPosts(tag);

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
        </div>
      ) : (
        <Skeleton variant="rect" height={240} animation="wave" />
      )}
    </>
  );
}

export default TagFeedPage;
