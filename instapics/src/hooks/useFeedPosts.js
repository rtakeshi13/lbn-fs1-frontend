import { useState, useEffect } from "react";
import { getFeed } from "../services/axios";

const useFeedPosts = (tag) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await getFeed(page);
      setPosts((p) => p.concat(response));
    })();
  }, [page]);

  const getNextPage = () => {
    setPage(page + 1);
  };
  return { posts, getNextPage };
};

export default useFeedPosts;
