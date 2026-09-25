import { api } from "./axios";

export const getTickets = async () => {
  const response = await api.get("/tickets");
  return response.data;
};

export const createTicket = async (ticket) => {
  const res = await api.post("/tickets", ticket);
  return res.data;
};
export const updateTicket = async ({ id, updates }) => {
  const response = await api.patch(`/tickets/${id}`, updates);

  return response.data;
};
export const deleteTicket = async (id) => {
  const response = await api.delete(`/tickets/${id}`);
  return response.data;
};
export const getTicketById = async (id) => {
  const response = await api.get(`/tickets/${id}`);

  return response.data;
};
