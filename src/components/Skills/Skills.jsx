import tech from '../../assets/tech.png';
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoMongodb, BiLogoTailwindCss, BiLogoNodejs, BiLogoGit, BiLogoReact } from 'react-icons/bi';
import styles from './Skills.css';
import { useState } from 'react';

export default function Skills() {
  const [skills, setSkills] = useState([
    {
      name: "HTML",
      icon: BiLogoHtml5,
      backgroundColor: "#FFF",
      color: "#E44F26"
    },
    {
      name: "CSS",
      icon: BiLogoCss3,
      backgroundColor: "#FFF",
      color: "#1572B6"
    },

    {
      name: "Javascript",
      icon: BiLogoJavascript,
      backgroundColor: "#F7DF1E",
      color: "#000"
    },
    {
      name: "MongoDB",
      icon: BiLogoMongodb,
      backgroundColor: "#84BD48",
      color: "#FFF"
    },
    {
      name: "Tailwind",
      icon: BiLogoTailwindCss,
      backgroundColor: "#FFF",
      color: "#1572B6"
    },
    {
      name: "Node",
      icon: BiLogoNodejs,
      backgroundColor: "#84BD48",
      color: "#FFF"
    },
    {
      name: "Git",
      icon: BiLogoGit,
      backgroundColor: "#FFFFFF",
      color: "#F05033"
    },
    {
      name: "React",
      icon: BiLogoReact,
      backgroundColor: "#FFF",
      color: "#1572B6"
    },
  ]);
  return (
    <section id="skills" className='flex flex-col'>
      <h1 className='mx-auto font-bold text-5xl'>SKILLS</h1>

      <div className="h-[93vh] flex items-center justify-center relative">
        <div className="planet-orbit">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="planet flex flex-col "
              style={{ backgroundColor: `${skill.backgroundColor}`, color: `${skill.color}` }}

            >
              <span className='font-bold'>{skill.name}</span>
              <skill.icon size={120} />
            </div>
          ))}
        </div>
        <img src={tech} alt="tech" className="centered-image md:w-[18rem] sm:w-[12rem] w-[8rem]" />

      </div>
    </section>
  );
}