import axios from "axios";

const baseUrl = "https://labepics.azurewebsites.net";

export const signup = async (body) => {
  console.log("inicio signup");
  try {
    const response = await axios.post(`${baseUrl}/user/signup`, body);
    console.log("depois try await, response :");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("catch, error:");
    console.log(error);
    return error.response;
  }
};

export const login = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/user/login`, body);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getProfile = async (nickname) => {
  const axiosConfig = {
    headers: {
      authorization: JSON.parse(localStorage.getItem("labepics")).token,
    },
  };
  try {
    const response = await axios.get(
      `${baseUrl}/user/${nickname}`,
      axiosConfig
    );
    return response.data.user;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export const updateProfile = async (body) => {
  const axiosConfig = {
    headers: {
      authorization: JSON.parse(localStorage.getItem("labepics")).token,
    },
  };
  try {
    const response = await axios.put(`${baseUrl}/profile`, body, axiosConfig);
    return response.data.user;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data;
  }
};

export const getPostsByUserId = async (userId, page) => {
  const axiosConfig = {
    headers: {
      authorization: JSON.parse(localStorage.getItem("labepics")).token,
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
    return [];
  }
};

export const createPost = async (body) => {
  const axiosConfig = {
    headers: {
      authorization: JSON.parse(localStorage.getItem("labepics")).token,
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
