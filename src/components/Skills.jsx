import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

//change list of all of the major tools that we're coded , also edit  employers or clients project
export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            HTML, CSS, and JavaScript form the foundation of my skillset, allowing me to create visually appealing and interactive web pages.
            With expertise in WordPress, I can build customized websites and effectively manage content with its user-friendly interface.
            React and Next.js empower me to develop modern and high-performance web applications, providing seamless user experiences and server-side rendering capabilities.
            Node.js enables me to build scalable and efficient server-side applications, utilizing its event-driven architecture and extensive package ecosystem.
            Proficient in C++ and Data Structures and Algorithms, I can develop optimized and robust code, tackling complex problem-solving scenarios with efficiency and precision.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}