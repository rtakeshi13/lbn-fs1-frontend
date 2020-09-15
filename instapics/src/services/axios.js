import axios from "axios";
import { getToken } from "./localStorage";

// const baseUrl = "https://labepics.azurewebsites.net";
const baseUrl = "http://localhost:3003";

export const signup = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/user/signup`, body);
    return response.data;
  } catch (error) {
    console.log(error.response);
    return false;
  }
};

export const login = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/user/login`, body);
    return response.data;
  } catch (error) {
    console.log(error.response);
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
    console.log(error.response);
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
    console.log(error.response);
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
    console.log(error.response);
    return false;
  }
};
