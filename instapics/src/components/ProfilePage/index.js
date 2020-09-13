import React, { useState } from "react";

import { useParams } from "react-router-dom";

import useProfile from "../../hooks/useProfile";
import usePosts from "../../hooks/usePosts";

import InfiniteScroll from "react-infinite-scroll-component";

function ProfilePage() {
  const { nickname } = useParams();
  const profile = useProfile(nickname);
  const { posts, getNextPage } = usePosts(profile && profile.id);

  return (
    <>
      {profile && (
        <InfiniteScroll
          dataLength={posts.length}
          next={getNextPage}
          scrollThreshold="20px"
          hasMore={posts.length < profile.postsCount}
          loader={<h4>Loading...</h4>}
        >
          {posts.map((i, index) => (
            <div
              style={{
                height: 60,
                border: "1px solid green",
                margin: 6,
                padding: 8,
              }}
              key={index}
            >
              div - #{index}
            </div>
          ))}
        </InfiniteScroll>
      )}
    </>
  );
}

export default ProfilePage;
