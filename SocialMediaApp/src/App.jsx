import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./RoutingConfig/RoutingConfig";
import AuthContextProvider from "./Context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeroUIProvider } from "@heroui/react";
import { Toaster } from "react-hot-toast";
import GeneralContextProvider from "./Context/GeneralContext";

// react Query init
const queryClient = new QueryClient();

export default function App() {
  return (
    <HeroUIProvider>
      <QueryClientProvider client={queryClient}>
        <GeneralContextProvider>
          <AuthContextProvider>
            <RouterProvider router={routes} />
            <Toaster position="top-right" reverseOrder={true} />
          </AuthContextProvider>
        </GeneralContextProvider>
      </QueryClientProvider>
    </HeroUIProvider>
  );
}
