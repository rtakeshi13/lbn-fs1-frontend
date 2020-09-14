import React from "react";

import { useParams } from "react-router-dom";

import useProfile from "../../hooks/useProfile";
import usePosts from "../../hooks/usePosts";

import ProfileView from "../ProfileView";
import InfiniteScroll from "react-infinite-scroll-component";

function ProfilePage() {
  const { nickname } = useParams();
  const profile = useProfile(nickname);
  const { posts, getNextPage } = usePosts(profile && profile.id);

  return (
    <>
      {profile ? (
        <div>
          <ProfileView profile={profile} />
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
                  height: 240,
                  border: "1px solid green",
                  margin: 6,
                  padding: 8,
                }}
                key={index}
              >
                <img src={i.mediaUrl} height="100%" />
              </div>
            ))}
          </InfiniteScroll>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default ProfilePage;
