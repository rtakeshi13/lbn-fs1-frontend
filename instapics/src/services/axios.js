import axios from "axios";
import { getToken } from "./localStorage";

const baseUrl = "https://labepicssud.azurewebsites.net";
// const baseUrl = "http://localhost:3003";

export const signup = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/user/signup`, body);
    return response.data;
  } catch (error) {
    console.log(error.response.message);
    return false;
  }
};

export const login = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/user/login`, body);
    return response.data;
  } catch (error) {
    console.log(error.response.message);
    return false;
  }
};

export const getProfileByNickname = async (nickname) => {
  const axiosConfig = {
    headers: {
      authorization: getToken(),
    },
  };
  try {
    const response = await axios.get(
      `${baseUrl}/user/${nickname}`,
      axiosConfig
    );

    return response.data.user;
  } catch (error) {
    console.log(error.response.message);
    return false;
  }
};

export const getPostsByUserId = async (userId, page) => {
  const axiosConfig = {
    headers: {
      authorization: getToken(),
    },
  };
  try {
    const response = await axios.get(
      `${baseUrl}/post?userId=${userId}&page=${page}`,
      axiosConfig
    );
    return response.data.posts;
  } catch (error) {
    console.log(error.response.message);
    return false;
  }
};

export const createPost = async (body) => {
  const axiosConfig = {
    headers: {
      authorization: getToken(),
    },
  };
  try {
    await axios.post(`${baseUrl}/post/create`, body, axiosConfig);
    return true;
  } catch (error) {
    console.log(error.response.message);
    return false;
  }
};

export const getCollections = async () => {
  const axiosConfig = {
    headers: {
      authorization: getToken(),
    },
  };
  try {
    const response = await axios.get(`${baseUrl}/post/collection`, axiosConfig);
    return response.data.collections;
  } catch (error) {
    console.log(error.response.message);
    return false;
  }
};

export const createCollection = async (body) => {
  const axiosConfig = {
    headers: {
      authorization: getToken(),
    },
  };
  try {
    await axios.put(`${baseUrl}/post/collection`, body, axiosConfig);
  } catch (error) {
    console.log(error.response.message);
    return false;
  }
};

export const search = async (input) => {
  const axiosConfig = {
    headers: {
      authorization: getToken(),
    },
  };
  try {
    const response = await axios.get(
      `${baseUrl}/search?q=${input.replace("#", "%23")}`,
      axiosConfig
    );
    return response.data.result;
  } catch (error) {
    console.log(error.response.message);
    return false;
  }
};

export const getPostsByTag = async (tag, page) => {
  const axiosConfig = {
    headers: {
      authorization: getToken(),
    },
  };
  try {
    const response = await axios.get(
      `${baseUrl}/post/tag?tag=${"%23" + tag}&page=${page}`,
      axiosConfig
    );

    return response.data.posts;
  } catch (error) {
    console.log(error.response.message);
    return false;
  }
};

export const getFeed = async (page) => {
  const axiosConfig = {
    headers: {
      authorization: getToken(),
    },
  };
  try {
    const response = await axios.get(
      `${baseUrl}/post/feed?page=${page}`,
      axiosConfig
    );
    return response.data.posts;
  } catch (error) {
    console.log(error.response.message);
    return false;
  }
};
