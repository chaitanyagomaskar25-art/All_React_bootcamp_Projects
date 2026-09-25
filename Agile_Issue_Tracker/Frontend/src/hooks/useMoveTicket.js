import { updateTicket } from "../api/ticketApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useMoveTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTicket,

    onMutate: async ({ id, updates }) => {
      await queryClient.cancelQueries({
        queryKey: ["tickets"],
      });

      const previousTickets = queryClient.getQueryData([
        "tickets",
      ]);

      queryClient.setQueryData(
        ["tickets"],
        (old = []) =>
          old.map((ticket) =>
            ticket.id === id
              ? { ...ticket, ...updates }
              : ticket
          )
      );

      return { previousTickets };
    },

    onError: (error, variables, context) => {
      queryClient.setQueryData(
        ["tickets"],
        context.previousTickets
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });
    },
  });
};