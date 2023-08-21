import { Carousel } from "@material-tailwind/react";
import teste from "../../assets/teste.png";
import projects1 from "../../assets/projects-1.png";
import projects3 from "../../assets/projects-3.png";
import Button from "../Button/Button";
import { BsEyeFill, BsArrowUpRightCircleFill } from "react-icons/bs";

import styles from "./Carousel.css"
export const projects = [
  {
    name: "Tailwind Site",
    url: projects1,
    demoURL: "https://google.com"
  },
  {
    name: "Outro Site",
    url: teste,
    demoURL: "https://youtube.com"
  },
];

export default function CarouselCustomNavigation() {
  return (
    <section className="carousel">
      <Carousel
        transition={{ duration: 1 }}
        className="rounded-xl mb-10 bg-[#FFF] border-2 border-black  md:w-[100%]"
      >
        {projects.map((project, index) => (
          <>
            <div
              key={index}
              className="h-[45vh] max-w-[100%]  aspect-video md:h-[65vh] md:aspect-auto flex flex-col md:flex-row gap-5 font-bold text-lg overflow-hidden">
              <img
                src={project.url}
                alt={project.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div
              key={Math.floor(Math.random() * 500000)}
              className='border-t-2 border-black bg-white flex flex-col items-center pt-8 pb-2 gap-16 font-bold text-lg justify-center md:flex-row md:justify-around md:gap-0'>
              <Button text={`Ver Site`} icon={<BsArrowUpRightCircleFill />} url={project.demoURL} />
              <Button text={`Ver Prévia`} icon={<BsEyeFill />} url={project.url} />
            </div>
          </>
        ))}
      </Carousel>

    </section>
  );
}