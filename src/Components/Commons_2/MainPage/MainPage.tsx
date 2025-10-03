import Typewriter from "typewriter-effect";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";
import ButtonLink from "@/Components/Commons/ButtonLink/ButtonLink";
import { FaRegUser } from "react-icons/fa";
const MainPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div
      className={`lg:text-8xl w-fit h-fit flex flex-col lg:gap-[60px] items-center  lg:items-start lg:pt-0  text-2xl text-center lg:text-left gap-5`}
    >
      {isMobile ? (
        <motion.div
          key="mobile"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi Folks!
        </motion.div>
      ) : (
        <motion.div
          key="desktop"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Front <br /> End <br /> Developer
        </motion.div>
      )}

      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className={`lg:text-xl text-sm lg:w-[800px] font-extralight`}>
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
              deleteSpeed: 40,
            }}
          />
        </div>
      </motion.div>

      <div className={"lg:hidden block"}>
        <ButtonLink href={`#aboutMe`}>
          <FaRegUser />
          About Me
        </ButtonLink>
      </div>
    </div>
  );
};

export default MainPage;
