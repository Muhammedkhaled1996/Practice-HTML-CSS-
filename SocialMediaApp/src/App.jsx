import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./RoutingConfig/RoutingConfig";
import AuthContextProvider from "./Context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeroUIProvider } from "@heroui/react";
import { Toaster } from "react-hot-toast";
import GeneralContextProvider from "./Context/GeneralContext";
import { useNetworkState } from "react-use";
import { Spinner } from "@heroui/react";

// react Query init
const queryClient = new QueryClient();

export default function App() {
  const state = useNetworkState();

  return (
    <>
      {state.online === false && (
        <div className="fixed inset-0  bg-black/50  z-50 font-bold text-white text-3xl">
          <div className="absolute top-10 right-10 flex items-center justify-center gap-3">
            <Spinner size="lg" color="white" variant="spinner" />
            <p>Network Failed To Connect</p>
          </div>
        </div>
      )}
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
    </>
  );
}
