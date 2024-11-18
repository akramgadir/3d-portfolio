import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* GitHub Button */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex flex-col items-center justify-center gap-8"
      >
        <div
          className="w-[200px] h-[200px] rounded-full flex items-center justify-center"
          style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)", // Transparent purple background
          }}
        >
          <a
            href="https://github.com/akramgadir/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[150px] h-[150px] bg-cover bg-center"
            style={{
              backgroundImage: "url(/githublogo.png)",
              backgroundSize: "contain", // Ensures the full image is visible
              backgroundRepeat: "no-repeat",
            }}
          ></a>
        </div>
      </motion.div>

      {/* Spinning Globe */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-[450px] md:h-[350px] h-[250px] flex justify-center items-center"
      >
        <EarthCanvas />
      </motion.div>

      {/* LinkedIn Button */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex flex-col items-center justify-center gap-8"
      >
        <div
          className="w-[200px] h-[200px] rounded-full flex items-center justify-center"
          style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)", // Transparent purple background
          }}
        >
          <a
            href="https://www.linkedin.com/in/akramgadir/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[150px] h-[150px] bg-cover bg-center"
            style={{
              backgroundImage: "url(/linkedinlogo.png)",
              backgroundSize: "contain", // Ensures the full image is visible
              backgroundRepeat: "no-repeat",
            }}
          ></a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
