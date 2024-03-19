import { memo } from "react";
import { Nav } from "./Nav";
import { Outlet } from "react-router-dom";
import { TransitionProvider } from "./TransitionProvider";

export const Theme = memo(() => {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
      <div className="h-24">
        <Nav />
      </div>
      <div className="h-[calc(100vh-6rem)]">
        <TransitionProvider>
          <Outlet />
        </TransitionProvider>
      </div>
    </div>
  );
});
