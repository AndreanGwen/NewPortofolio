"use client";
import Navbar from "../Navbar/Navbar";
import { motion } from "motion/react";
import Typewriter from "typewriter-effect";

const HomePage = () => {
  return (
    <div
      className={`bg-[#fafafa] w-full min-h-screen bg-cover flex items-center pl-20 pr-20 flex-col`}
    >
      <Navbar></Navbar>

      <div className={`flex justify-between w-full h-screen items-center`}>
        <motion.div
          className={`text-8xl w-fit h-fit flex flex-col gap-[60px]`}
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 1 }}
        >
          Front <br /> End <br /> Developer
          <span className={`text-xl w-[800px] font-extralight`}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "I am Andrean Gwen, a driven Computer Science student at Binus University, "
                  )
                  .pauseFor(1500)
                  .typeString(
                    "specializing as a Frontend Developer. I focus on building modern, responsive, and high-performance user interfaces"
                  )
                  .pauseFor(1500)
                  .typeString(" using the latest technologies like Next.js.")
                  .pauseFor(1500)
                  .deleteChars(8)
                  .typeString("TypeScript.")
                  .pauseFor(1500)
                  .deleteChars(11)
                  .typeString("Tailwind CSS.")
                  .pauseFor(1500)
                  .start();
              }}
              options={{
                delay: 40,
                loop: true,
                deleteSpeed: 40,
              }}
            />
          </span>
        </motion.div>

        <div className="">Photo Tester</div>
      </div>

      <div className="h-screen"></div>
    </div>
  );
};

export default HomePage;
