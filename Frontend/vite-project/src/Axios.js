// src/Axios.js
import axios from "axios";

const Instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, 
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

export default Instance;
