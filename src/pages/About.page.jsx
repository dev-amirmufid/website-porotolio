"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
  FaGithub,
  FaNpm,
  FaReact,
  FaNode,
  FaJs,
  FaLaravel,
  FaAws,
  FaDocker,
  FaBootstrap,
  FaCheckCircle,
} from "react-icons/fa";

import { FiCheckCircle } from "react-icons/fi";

import { Tooltip } from "flowbite-react";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiCodeigniter,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiPhp,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const AboutPage = () => {
  const softSkillRef = useRef();
  const isSoftSkillRefInView = useInView(softSkillRef, { once: true });

  const knowledgeRef = useRef();
  const isKnowledgeRefInView = useInView(knowledgeRef, { once: true });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { once: true });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { once: true });

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden lg:flex">
      {/* TEXT CONTAINER */}
      <div className="grid grid-cols-4 gap-16 p-4 sm:p-8 md:p-12 lg:px-20 xl:px-48">
        {/* Avatar CONTAINER */}
        <div className="col-span-4 lg:col-span-1 flex flex-col gap-12  items-center">
          <img
            className="object-contain p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="/images/profile-pic.png"
          />
        </div>

        {/* Personal Info CONTAINER */}
        <div className="col-span-3 flex flex-col gap-4 text-lg">
          <h1 className="font-bold text-2xl uppercase">Who i am ?</h1>
          <p>
            I'am an expert Web Developer who specializes in building ERP
            Software using Microservices Architecture Pattern with a 10 year
            track record Commendable performance in modular and object-oriented
            programming.
          </p>
          <p>
            My goals is to build innovation and provide solutions in technology
            development in the most creative & efficient way. I have created web
            applications for many software companies.
          </p>
          <h1 className="font-bold text-2xl italic">
            "First, solve the problem. Then, write the code."
          </h1>
        </div>

        {/* KNOWLEDGE CONTAINER */}
        <div
          className="col-span-4 flex flex-col gap-4 text-lg"
          ref={knowledgeRef}
        >
          <motion.h1
            initial={{ x: "-2000px" }}
            animate={isKnowledgeRefInView ? { x: "0" } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="font-bold text-2xl text-center uppercase"
          >
            What can i do ?
          </motion.h1>
          <div className="flex flex-wrap ">
            <motion.div
              initial={{ x: "-2000px" }}
              animate={isKnowledgeRefInView ? { x: "0" } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              className="p-2 sm:w-1/2 w-full"
            >
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <FiCheckCircle className="mr-2 text-green-400" />
                <span className="title-font font-medium">
                  Web App Development
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: "2000px" }}
              animate={isKnowledgeRefInView ? { x: "0" } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              className="p-2 sm:w-1/2 w-full"
            >
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <FiCheckCircle className="mr-2 text-green-400" />
                <span className="title-font font-medium">
                  Mobile Development
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: "-2000px" }}
              animate={isKnowledgeRefInView ? { x: "0" } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="p-2 sm:w-1/2 w-full"
            >
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <FiCheckCircle className="mr-2 text-green-400" />
                <span className="title-font font-medium">Database Design</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: "2000px" }}
              animate={isKnowledgeRefInView ? { x: "0" } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="p-2 sm:w-1/2 w-full"
            >
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <FiCheckCircle className="mr-2 text-green-400" />
                <span className="title-font font-medium">
                  Software Architecture Design
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: "-2000px" }}
              animate={isKnowledgeRefInView ? { x: "0" } : {}}
              transition={{ delay: 2, duration: 0.5 }}
              className="p-2 sm:w-1/2 w-full"
            >
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <FiCheckCircle className="mr-2 text-green-400" />
                <span className="title-font font-medium">Dev Ops</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: "2000px" }}
              animate={isKnowledgeRefInView ? { x: "0" } : {}}
              transition={{ delay: 2, duration: 0.5 }}
              className="p-2 sm:w-1/2 w-full"
            >
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <FiCheckCircle className="mr-2 text-green-400" />
                <span className="title-font font-medium">Project Manager</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: "-2000px" }}
              animate={isKnowledgeRefInView ? { x: "0" } : {}}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="p-2 sm:w-1/2 w-full"
            >
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <FiCheckCircle className="mr-2 text-green-400" />
                <span className="title-font font-medium">
                  Application Tester
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: "2000px" }}
              animate={isKnowledgeRefInView ? { x: "0" } : {}}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="p-2 sm:w-1/2 w-full"
            >
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <FiCheckCircle className="mr-2 text-green-400" />
                <span className="title-font font-medium">Documentation</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* EXPERIENCE CONTAINER */}
        <div
          className="col-span-2 row-span-2 flex flex-col gap-12"
          ref={experienceRef}
        >
          {/* EXPERIENCE TITLE */}
          <motion.h1
            initial={{ x: "-2000px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            transition={{ duration: 0.5 }}
            className="font-bold text-2xl text-center uppercase"
          >
            Experience
          </motion.h1>
          {/* EXPERIENCE LIST */}
          <motion.div
            initial={{ x: "-2000px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className=""
          >
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              <div className="w-1/3 ">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Fullstack Developer
                </div>
                <div className="p-3 text-sm italic">
                  I lead web development outsourced projects from Japan (
                  <a
                    className="text-red-400 text-sm font-semibold"
                    href="https://www.uchidayoko.com/"
                  >
                    Uchida Yoko Global Co. Ltd)
                  </a>
                  , offering expertise in JavaScript frameworks with
                  Microservices Pattern Design
                </div>
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2019 - 2024
                </div>
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  PT. Pantona Teknologi Indonesia
                </div>
              </div>
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              <div className="w-1/3 "></div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              <div className="w-1/3 "></div>
              <div className="w-1/6 flex justify-center">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              <div className="w-1/3 ">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Senior React Developer
                </div>
                <div className="p-3 text-sm italic">
                  I was part of an (99% Usahaku) E-commerce application
                  development team based on React Native, utilizing advanced
                  skills.
                </div>
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2022
                </div>
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  PT. Dans Multipro
                </div>
              </div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              <div className="w-1/3 ">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  React Js & React Native Developer
                </div>
                <div className="p-3 text-sm italic">
                  I was part of development team based on ReactJs & React
                  Native, Payroll Application
                </div>
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2019
                </div>
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  CV. Sobat Teknologi
                </div>
              </div>
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              <div className="w-1/3 "></div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              <div className="w-1/3 "></div>
              <div className="w-1/6 flex justify-center">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              <div className="w-1/3 ">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Fullstack Javascript Developer
                </div>
                <div className="p-3 text-sm italic">
                  I was create a lot apps using Javascript Framework ReactJs,
                  VueJs, AngularJs. <br />
                  Mobile apps using React Native
                  <br />
                  Backend using Node ExpressJs
                </div>
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2017 - 2019
                </div>
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  CV. Hade Daya Solution - Mobile Developer
                </div>
              </div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              <div className="w-1/3 ">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Fullstack PHP Developer
                </div>
                <div className="p-3 text-sm italic">
                  Build campus academic information system products using (CI,
                  Jquery, Mysql, NodeJs) Applications that have been made
                  include: Campus Academic Information System, New Student
                  Registration System, Website Profile, HR, Accounting, E -
                  Learning
                </div>
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2014 - 2017
                </div>
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  PT. Edu Sinergi Informatika
                </div>
              </div>
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              <div className="w-1/3 "></div>
            </div>
          </motion.div>
        </div>

        {/* SKILLS CONTAINER */}
        <div className="col-span-2 flex flex-col gap-12 " ref={softSkillRef}>
          {/* SKILL TITLE */}
          <motion.h1
            initial={{ x: "2000px" }}
            animate={isSoftSkillRefInView ? { x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-bold text-2xl text-center uppercase"
          >
            Skills
          </motion.h1>
          {/* SKILL LIST */}
          <motion.div
            initial={{ x: "2000px" }}
            animate={isSoftSkillRefInView ? { x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex gap-4 flex-wrap"
          >
            <ul class="w-full flex flex-col gap-4 space-y-2  list-inside ">
              <li class="flex items-center text-center">
                <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0" />
                Develop clean and scalable codes/APIs
              </li>
              <li class="flex items-center">
                <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0" />
                Writing well-designed, testable and efficient code
              </li>
              <li class="flex items-center">
                <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0" />
                Providing code documentation and other inputs to technical
                documents
              </li>
              <li class="flex items-center">
                <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0" />
                Troubleshooting and debugging to optimize performance
              </li>
              <li class="flex items-center">
                <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0" />
                Supporting continuous improvement by investigating alternatives
                and new technologies and presenting these for architectural
                review
              </li>
              <li class="flex items-center">
                <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0" />
                Leading the design, creation, and implementation of a suite of
                software
              </li>
              <li class="flex items-center">
                <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0" />
                Building on new features, software analysis, software design,
                code implementation, software integration
              </li>
              <li class="flex items-center">
                <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0" />
                Initiative and ability to work independently
              </li>
            </ul>
          </motion.div>
        </div>

        {/* PROGRAMMING SKILLS CONTAINER */}
        <div className="col-span-2 flex flex-col gap-12 " ref={skillRef}>
          {/* SKILL TITLE */}
          <motion.h1
            initial={{ x: "2000px" }}
            animate={isSkillRefInView ? { x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-bold text-2xl text-center uppercase"
          >
            Programming Skills
          </motion.h1>
          {/* SKILL LIST */}
          <motion.div
            initial={{ x: "2000px" }}
            animate={isSkillRefInView ? { x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex gap-4 flex-wrap"
          >
            <Tooltip content="NPM">
              <FaNpm className="text-red-700 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="Javascript">
              <FaJs className="text-yellow-300 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="Typescript">
              <SiTypescript className="text-blue-500 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="React Js">
              <FaReact className="text-sky-400 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="Node Js">
              <FaNode className="text-green-500 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="Next Js">
              <TbBrandNextjs className="text-black text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="Nest Js">
              <SiNestjs className="text-red-700 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="Socket.io">
              <SiSocketdotio className="text-black text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="PHP">
              <SiPhp className="text-indigo-500 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="Laravel">
              <FaLaravel className="text-orange-500 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="Codeigniter">
              <SiCodeigniter className="text-red-500 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="MySql">
              <SiMysql className="text-sky-600 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="PostgreSql">
              <BiLogoPostgresql className="text-blue-700 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="MongoDb">
              <SiMongodb className="text-green-600 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="Redis">
              <SiRedis className="text-red-700 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="AWS">
              <FaAws className="text-orange-400 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="Docker">
              <FaDocker className="text-blue-600 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="Github">
              <FaGithub className="text-black text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="JQuery">
              <SiJquery className="text-blue-500 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="Bootstrap CSS">
              <FaBootstrap className="text-purple-600 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
            <Tooltip content="Tailwind CSS">
              <SiTailwindcss className="text-sky-400 text-6xl scale-75 hover:scale-100 ease-in duration-500" />
            </Tooltip>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
