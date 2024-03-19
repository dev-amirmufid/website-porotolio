/* eslint-disable react-refresh/only-export-components */
"use client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainRoute } from "./main.router";
import { AnimatePresence } from "framer-motion";

export const router = createBrowserRouter([MainRoute]);

export const PageRouterProvider = () => (
  <AnimatePresence mode="wait">
    <RouterProvider router={router} />
  </AnimatePresence>
);
