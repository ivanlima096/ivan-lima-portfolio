import React, { useEffect, useState } from "react";
import styles from "./SkillBar.css";

const skills = [
  "HTML", "CSS", "JAVASCRIPT", "MONGO DB",
  "TAILWIND", "NODE", "GIT", "REACT"
];

export default function SkillBar() {
  const [text, setText] = useState([]);

  useEffect(() => {
    const duplicatedSkills = [...skills, ...skills, ...skills, ...skills, ...skills, ...skills];
    setText(duplicatedSkills);
  }, []);

  return (
    <section className="mt-20 -mb-1 min-[400px]:mt-2 sm:mt-1 scrolling-text-container w-[100vw] h-[7rem] bg-black md:mt-40 lg:mt-96 xl:mt-8 text-white flex items-center justify-center border-none">
      <div className="scrolling-text font-bold text-3xl sm:text-4xl md:text-7xl">
        {text.map((skill, index) => (
          <React.Fragment key={index}>
            <span>{skill}</span>
            <span>&#9679;</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}