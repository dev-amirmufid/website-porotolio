import { RouteObject } from "react-router-dom";
import { HomePage } from "@/pages/Home.page";
import { Theme } from "@/components/theme";
import { AboutPage } from "@/pages/About.page";

export const MainRoute: RouteObject = {
  path: "/",
  element: <Theme />,
  children: [
    {
      index: true,
      handle: {
        title: "Home",
      },
      element: <HomePage />,
    },
    {
      path: "/about",
      handle: {
        title: "Home",
      },
      element: <AboutPage />,
    },
  ],
};
