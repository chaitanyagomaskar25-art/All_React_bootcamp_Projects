import { redirect } from "react-router";
import { createTicket } from "../api/ticketApi";

export const createTicketAction = async ({request}) => {
    const formData = await request.formData()
    const ticket = {
    title: formData.get("title"),
    description: formData.get("description"),
    priority: formData.get("priority"),
    status: formData.get("status"),
    assignee: formData.get("assignee"),
  };

  await createTicket(ticket)
  return redirect("/")
}