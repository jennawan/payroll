import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  return currentUser?.accessToken;
};

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

userRequest.interceptors.request.use(
  (config) => {
    const TOKEN = getLocalAccessToken();
    if (TOKEN) {
      config.headers["authorization"] = `Bearer ${TOKEN}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
