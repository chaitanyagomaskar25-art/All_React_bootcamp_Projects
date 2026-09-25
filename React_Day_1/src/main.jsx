import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppLayout from "./Component/AppLayout";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      // staleTime: 10000,
      // gcTime: 20000
    }
  }
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AppLayout />
    <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>,
);
