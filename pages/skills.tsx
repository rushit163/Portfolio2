/**
 * Index Page - Skills Section
 */

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SKILLS from "../data/skills";

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, type: "spring" }}
      className="my-32 mb-20 w-full overflow-x-clip lg:mb-52 "

    >
      <div className="animate-marquee whitespace-nowrap ">
          {SKILLS.map((skill) => (
            <span
              className="block h-[120%] max-w-[60px] mx-5 my-16"
              title={skill.name}
              >
              <Image
                src={skill.image}
                alt={skill.name}
                width='100'
                height='100'
                className="h-full w-full object-contain"
                unoptimized={true}
                />
              </span>
           ))}
        </div>
        </motion.section>
  )
};

export default Skills;