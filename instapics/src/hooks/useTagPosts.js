import { useState, useEffect } from "react";
import { getPostsByTag } from "../services/axios";

const useTagPosts = (tag) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    (async () => {
      if (tag) {
        const response = await getPostsByTag(tag, page);
        setPosts((p) => p.concat(response));
      }
    })();
  }, [tag, page]);

  const getNextPage = () => {
    setPage(page + 1);
  };
  return { posts, getNextPage };
};

export default useTagPosts;
