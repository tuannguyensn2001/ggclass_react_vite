import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:7000/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export default API;
