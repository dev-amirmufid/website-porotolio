"use client";

import { Button, Tooltip } from "flowbite-react";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export const HomePage = () => {
  return (
    <div className="h-full grid grid-cols-3 gap-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="hidden md:block">
        <motion.img
          initial={{ x: "-2000px" }}
          animate={{ x: "0" }}
          transition={{ delay: 0.5, duration: 1.5 }}
          src="/images/hero-bg-anime.png"
          alt=""
          className="h-full object-contain"
        />
      </div>
      <div className="col-span-3 md:col-span-2 h-full lg:h-full lg:w-full flex flex-col gap-8 items-center justify-center">
        <motion.div
          initial={{ x: "2000px" }}
          animate={{ x: "0" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mr-auto place-self-center md:col-span-7 text-center md:text-left "
        >
          <div className="text-lg font-light text-gray-500 dark:text-gray-400 space-y-4">
            <p className="text-2xl">Hey There 👋 I am,</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-black dark:text-white">
              Amir Mufid
            </h1>
            <p className="text-3xl md:text-4xl lg:text-5xl">
              Professional{" "}
              <span className="font-semibold">Fullstack Web Developer</span>
            </p>

            <p className="">
              i am a software engineer with more than Ten Years of experience.
              recognized as a practical and effective developer, experienced in
              leading cross-functional teams in a time-pressured setting to
              complete projects on schedule and within budget.
            </p>

            <div className="space-y-2">
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl"
              >
                Contact Me :
              </motion.p>
              <div className="flex flex-wrap gap-2 justify-center text-4xl md:text-6xl md:justify-start">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                >
                  <Tooltip content="Github">
                    <a target="_blank" href="https://github.com/dev-amirmufid">
                      <Button size="lg" outline pill color="light">
                        <FaGithub className="text-black text-xl md:mr-2" />{" "}
                        <span className="hidden md:block">Github</span>
                      </Button>
                    </a>
                  </Tooltip>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3, duration: 0.5 }}
                >
                  <Tooltip content="Instagram">
                    <a target="_blank" href="https://instagram.com/amirmufid">
                      <Button size="lg" outline pill color="light">
                        <FaInstagram className="text-red-600 text-xl md:mr-2" />{" "}
                        <span className="hidden md:block">Instagram</span>
                      </Button>
                    </a>
                  </Tooltip>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3.5, duration: 0.5 }}
                >
                  <Tooltip content="Job Street">
                    <a
                      target="_blank"
                      href="https://www.jobstreet.co.id/id/profile/amir-mufid-4wc59xGvDR"
                    >
                      <Button size="lg" outline pill color="light">
                        <img
                          src="/images/icons/jobstreet-icon.png"
                          className="object-cover h-6"
                        />
                      </Button>
                    </a>
                  </Tooltip>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 4, duration: 0.5 }}
                >
                  <Tooltip content="WhatsApp">
                    <a href="https://wa.me/6281255071410" target="_blank">
                      <Button color="light" outline pill size={"lg"}>
                        <FaWhatsapp className="mr-2 text-green-500" />
                        WhatsApp
                      </Button>
                    </a>
                  </Tooltip>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
