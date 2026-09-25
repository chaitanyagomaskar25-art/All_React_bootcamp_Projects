import { createRoot } from "react-dom/client";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { router } from "./App";
import { RouterProvider } from "react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>

    <ReactQueryDevtools
      initialIsOpen={false}
      position="bottom"
    />
  </QueryClientProvider>
);