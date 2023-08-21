import { Carousel } from "@material-tailwind/react";
import teste from "../../assets/teste.png";
import projects1 from "../../assets/projects-1.png";
import projects3 from "../../assets/projects-3.png";
import Button from "../Button/Button";
import { BsEyeFill, BsArrowUpRightCircleFill } from "react-icons/bs";
import styles from "./Carousel.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

export const projects = [
  {
    name: "Tailwind Site",
    url: projects1,
    demoURL: "https://google.com",
    githubURL: "https://github.com/ivanlima096",
    description: "Projeto React criado com o objetivo de praticar habilidades de desenvolvimento web utilizando Tailwind CSS, componentização e a biblioteca react-typed. O site desenvolvido é uma aplicação interativa que demonstra a integração dessas tecnologias.",
    technologies: "Javascript, React, CSS, Tailwind, React-typed"
  },
  {
    name: "Segundo Site",
    url: teste,
    demoURL: "https://youtube.com",
    githubURL: "https://github.com/ivanlima096",
    description: "Projeto React criado com o objetivo de praticar habilidades de desenvolvimento web utilizando Tailwind CSS, componentização e a biblioteca react-typed. O site desenvolvido é uma aplicação interativa que demonstra a integração dessas tecnologias.",
    technologies: "Javascript, React, CSS, Tailwind, React-typed"
  },
  {
    name: "Terceiro Site",
    url: projects3,
    demoURL: "https://facebook.com",
    githubURL: "https://github.com/ivanlima096",
    description: "Projeto React criado com o objetivo de praticar habilidades de desenvolvimento web utilizando Tailwind CSS, componentização e a biblioteca react-typed. O site desenvolvido é uma aplicação interativa que demonstra a integração dessas tecnologias.",
    technologies: "Javascript, React, CSS, Tailwind, React-typed"
  },
];

export default function CarouselCustomNavigation() {
  const [projectModals, setProjectModals] = useState(Array(projects.length).fill(false));

  const handleModal = (projectIndex) => {
    const newProjectModals = [...projectModals];
    newProjectModals[projectIndex] = true;
    setProjectModals(newProjectModals);
  }

  return (
    <section className="carousel">
      <Carousel
        transition={{ duration: 1 }}
        className="rounded-xl mb-10 w-[82vw] lg:w-[80vw] bg-[#FFF] border-2 border-black md:w-[100%]"
      >
        {projects.map((project, index) => (
          <div key={index} className="slide-container">
            <div
              className="h-auto w-[100%] aspect-video md:h-[65vh] md:aspect-auto flex flex-col md:flex-row gap-5 font-bold text-lg overflow-hidden">
              <img
                src={project.url}
                alt={project.name}
                className="bg-black h-full w-full object-contain"
              />
            </div>
            <div
              className='border-t-2 border-black bg-white flex flex-col items-center pt-8 pb-2 gap-6 font-bold text-lg justify-center md:flex-row md:justify-around md:gap-0'>
              <Button text={`Ver Site`} icon={<BsArrowUpRightCircleFill />} url={project.demoURL} />
              <Button text={`Ver Prévia`} icon={<BsEyeFill />} handleFunction={() => handleModal(index)} />
            </div>
          </div>
        ))}
      </Carousel>

      {projects.map((project, index) => (
        <Modal
          key={index}
          isOpen={projectModals[index]}
          setIsOpenModal={() => {
            const newProjectModals = [...projectModals];
            newProjectModals[index] = false;
            setProjectModals(newProjectModals);
          }}
          projectName={project.name}
          projectUrl={project.url}
          projectGithub={project.githubURL}
          projectDescription={project.description}
          projectTech={project.technologies}
        />
      ))}
    </section>
  );
}
