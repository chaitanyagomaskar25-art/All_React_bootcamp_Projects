import axios from "axios";

export const api = axios.create({
  baseURL: "https://jira-clone-backend1.onrender.com",
});

