import React from "react";

import useFeedPosts from "../../hooks/useFeedPosts";

import { PostFeed } from "./styles";
import Skeleton from "@material-ui/lab/Skeleton";

function UserFeedPage() {
  const { posts, getNextPage } = useFeedPosts();

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
            hasMore={true}
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

export default UserFeedPage;
