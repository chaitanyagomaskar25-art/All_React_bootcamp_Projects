import { api } from "./axios";


export const getUsers = async () => {
  const { data } = await api.get("/users");
  return data;
};

export const getUser = async (id) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};


export const addUser = async (user) => {
  const { data } = await api.post("/users", user);
  return data;
};

export const deleteUser = async (id) => {
  const { data } = await api.delete(`/users/${id}`);
  return data;
};