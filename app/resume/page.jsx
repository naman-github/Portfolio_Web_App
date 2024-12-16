"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaGithub,
  FaFigma,
  FaShopify,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Naman Sharma",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 91747-36520",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "naman-ns23",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "naman.ns23@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem  Quisquam, quod.Lorem ipsum dolor sit amet.",
  items: [
    {
      company: "Ignite Solutions, Pune",
      position: "Frontend Developer SDE-1",
      duration: "Jan 2023 - Present",
    },
    {
      company: "Cidrus Technologies Inc.",
      position: "Software Developer Intern",
      duration: "Jun 2022 - Aug 2022",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "May 2024 - Nov 2024",
    },
    {
      company: "Ignite Solutions, Pune",
      position: "Frontend Developer SDE-1",
      duration: "Jan 2023 - Present",
    },
    {
      company: "Cidrus Technologies Inc.",
      position: "Software Developer Intern",
      duration: "Jun 2022 - Aug 2022",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "May 2024 - Nov 2024",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet.",
  items: [
    {
      institution: "Avantika University - MIT Pune Campus",
      degree: "B.Tech Computer Science",
      duration: "June 2019 - June 2023",
    },
    {
      institution: "Udemy",
      degree: "Web Development Bootcamp",
      duration: "Dec 2022 - Jan 2023",
    },
    {
      institution: "Indore Public School, Indore",
      degree: "High School",
      duration: "June 2016 - May 2019",
    },
    {
      institution: "Pioneer Institute of Professional Studies",
      degree: "Diploma in Agri-Business",
      duration: "2019 - 2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet.",
  skillList: [
    {
      name: "html 5",
      icon: <FaHtml5 />,
    },
    {
      name: "css 3",
      icon: <FaCss3 />,
    },
    {
      name: "javascript es6+",
      icon: <FaJs />,
    },
    {
      name: "react.js",
      icon: <FaReact />,
    },
    {
      name: "next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "tailwind css",
      icon: <SiTailwindcss />,
    },
    {
      name: "node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "npm",
      icon: <FaNpm />,
    },
    {
      name: "github",
      icon: <FaGithub />,
    },
    {
      name: "figma",
      icon: <FaFigma />,
    },
    {
      name: "shopify",
      icon: <FaShopify />,
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap -6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-4xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
