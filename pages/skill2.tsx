import React from 'react'
import Image from "next/image";
import SKILLS from "../data/skills";
const Skill2 = () => {
  return (
          <div className=" animate-marquee2 whitespace-nowrap">
          {SKILLS.map((skill) => (
            <span
              className="max-w-[10px] mx-5 lg:my-16"
              title={skill.name}
              >
              <Image
                src={skill.image}
                alt={skill.name}
                width={40}
                height={40}
                unoptimized={true}
                />
              </span>
           ))}
          </div>
  )
}

export default Skill2;
