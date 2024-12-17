"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 91747-36520",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "naman.ns23@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Address",
    description: "Indore, Madhya Pradesh, India 452009",
  },

];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
     }}
      className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:h-[54%] order-2 xl:order:none">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quae.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="Firstname"/>
                  <Input type="lastname" placeholder="Lastname"/>
                  <Input type="email" placeholder="Email address"/>
                  <Input type="phone" placeholder="Phone number"/>
                </div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">Shopify Development</SelectItem>
                      <SelectItem value="mst">SPA Development</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </form>
            </div>
            
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              info
            </div>
          </div>
        </div>
        
      </motion.section>
  );
};

export default Contact;
