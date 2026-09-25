import {
  useMutation,
  useQueryClient
} from "@tanstack/react-query";

import { deleteTicket } from "../api/ticketApi";


export const useDeleteTicket = () => {

  const queryClient = useQueryClient();


  return useMutation({

    mutationFn: deleteTicket,


    onMutate: async (id) => {

      await queryClient.cancelQueries({
        queryKey:["tickets"]
      });


      const previousTickets =
        queryClient.getQueryData(["tickets"]);


      queryClient.setQueryData(
        ["tickets"],
        (old = []) =>
          old.filter(
            ticket => ticket.id !== id
          )
      );


      return {
        previousTickets
      };

    },


    onError: (error, id, context) => {

      queryClient.setQueryData(
        ["tickets"],
        context.previousTickets
      );

    },


    onSettled: () => {

      queryClient.invalidateQueries({
        queryKey:["tickets"]
      });

    }

  });

};