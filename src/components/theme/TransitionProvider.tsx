"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";

export const TransitionProvider = ({ children }) => {
  return (
    <>
      <motion.div
        className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
        animate={{ height: "0vh" }}
        exit={{ height: "140vh" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <motion.div
        className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transitionEnd: {
            display: "none",
          },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center flex-col">
          <Logo className="text-7xl" />
        </div>
      </motion.div>
      <motion.div
        className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
        initial={{ height: "140vh" }}
        animate={{ height: "0vh", transition: { delay: 0.5 } }}
      />
      {children}
    </>
  );
};
