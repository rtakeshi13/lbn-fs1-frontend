import { useState, useEffect } from "react";
import { getPostsByUserId } from "../services/axios";

const usePosts = (userId) => {
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

export default usePosts;
