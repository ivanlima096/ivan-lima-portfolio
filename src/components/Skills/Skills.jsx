import earth from '../../assets/earth.png';
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoMongodb, BiLogoTailwindCss, BiLogoNodejs, BiLogoGit, BiLogoReact } from 'react-icons/bi';
import styles from './Skills.css';
// import Particle from '../Particles/Particles';


export default function Skills() {
  const skills = [
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
  ];
  return (
    <section id="skills" className='particles flex flex-col w-[100vw] h-[105vh] overflow-hidden relative bg-black -z-5'>
      <div className='particles'>

      </div>
      <div className="h-[100vh] w-[100vw] flex items-center justify-center sm:mt-20 ">
        <div className="hidden relative md:block">
          <div id="middle-orbit">
            <div id="middle-orbit-cirlces">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="middle-orbit-cirlces flex flex-col items-center justify-center rounded-[50%] absolute w-[9rem] h-[9rem] grayscale-[0.8] hover:grayscale-0 p-[10px] shadow-2xl"
                  style={{ backgroundColor: `${skill.backgroundColor}`, color: `${skill.color}`, userSelect: "none" }}
                >
                  <span className='font-bold'>{skill.name}</span>
                  <skill.icon size={120} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[99vw] md:hidden ">
          <div className='flex flex-wrap justify-center gap-4'>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="small-planet flex flex-col items-center justify-center w-[8rem] h-[8rem] min-[375px]:w-[10rem] min-[375px]:h-[10rem] rounded-[50%] p-2 shadow-2xl"
                style={{ backgroundColor: `${skill.backgroundColor}`, color: `${skill.color}`, userSelect: "none" }}
              >
                <span className='font-bold'>{skill.name}</span>
                <skill.icon size={80} />
              </div>
            ))}
          </div>
        </div>
        {/* <img src={earth} alt="tech" className="centered-image md:w-[18rem] sm:w-[12rem] w-[8rem] hidden md:block select-none" /> */}
      </div>
    </section>
  );
}