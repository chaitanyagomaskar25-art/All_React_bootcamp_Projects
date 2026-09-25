import { createBrowserRouter } from "react-router";
import To_Dos from "./pages/To_Dos";
import ErrorPage from "./pages/ErrorPage";
import { createTicketAction } from "./actions/CreateTicketAction";
import CreateTicket from "./pages/CreateTicket";
import DetailsOftask from "./components/DetailsofTask";
import MainLayout from "./components/Layout/MainLayout";
import AllTickets from "./components/AllTickets";
import Team from "./components/Team";
import TeamDetails from "./components/TeamDetails";
import AddUser from "./components/AddUser";
import Help from "./pages/Help";
import AIChat from "./pages/AIChat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <AllTickets />,
      },
      {
        path: "/tickets",
        element: <To_Dos />,
      },
      {
        path: "/tickets/new",
        element: <CreateTicket />,
        action: createTicketAction,
      },
      {
        path: "/ticket/:id",
        element: <DetailsOftask />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/team/:id",
        element: <TeamDetails />,
      },
      {
    path: "/add-user",
    element: <AddUser />
},
{
    path: "/ai-chat",
    element: <AIChat />,
},
{
    path:"/help",
    element:<Help />
}
    ],
    errorElement: <ErrorPage />,
  },
]);
