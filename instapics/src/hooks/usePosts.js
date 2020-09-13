import { useState, useEffect } from "react";
import { getPostsByUserId } from "../functions/axios";

const useProfilePosts = (userId) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    (async () => {
      if (userId) {
        const response = await getPostsByUserId(userId, page);
        setPosts((p) => p.concat(response));
      }
    })();
  }, [userId, page]);

  const getNextPage = () => {
    setPage(page + 1);
  };
  return { posts, getNextPage };
};

export default useProfilePosts;
