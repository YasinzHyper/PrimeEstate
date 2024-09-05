import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL !== null ? process.env.REACT_APP_API_URL : "http://localhost:8800/api", // process.env.REACT_APP_API_URL ||
  withCredentials: true,
});

export default apiRequest;
