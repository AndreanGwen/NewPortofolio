"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/Components/ui/hover-card";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.div
      className={`mb-[185px] mt-7 w-5/6 h-20 bg-white shadow-md rounded-full flex items-center justify-between pl-10 pr-10 fixed`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className={`font-bold text-xl cursor-pointer`}
        onClick={() => (window.location.href = "/")}
      >
        AG
      </div>
      <div className={`flex items-center gap-8`}>
        <HoverCard>
          <HoverCardTrigger className={`cursor-pointer`}>
            Contact
          </HoverCardTrigger>
          <HoverCardContent>
            <div
              className={`flex items-center gap-2 cursor-pointer`}
              onClick={() => window.open("https://instagram.com/andrstry_gwn")}
            >
              <FaInstagram />
              andrstry_gwn
            </div>
          </HoverCardContent>
        </HoverCard>

        <div className={`flex items-center gap-2`}>
          <FaGithub
            size={25}
            // color={``}
            onClick={() => window.open("https://github.com/AndreanGwen")}
            className={`cursor-pointer hover:scale-110 ease-in-out duration-300`}
          />
          <FaLinkedin
            size={25}
            onClick={() =>
              window.open("https://linkedin.com/in/andrean-gwen-222358331")
            }
            className={`cursor-pointer hover:scale-110 ease-in-out duration-300 hover:text-blue-600`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
