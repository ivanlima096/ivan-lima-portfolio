import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import { projects } from "../Carousel/Carousel";
import { BsLinkedin, BsGithub, BsWhatsapp, BsDownload } from "react-icons/bs"

export default function Projects() {
  return (
    <section id="projetos" className="bg-white h-[100vh] mt-12 flex flex-col items-center">
      <h1 className="text-center font-bold text-5xl md:text-7xl lg:text-[5rem] mb-12">PROJETOS</h1>
      <div className=" h-[60vh] w-[90vw] md:h-[60vh] md:w-[60vw] text-white flex flex-col gap-5 items-center justify-center">
        <Carousel />
        {projects.map((project, index) => (
          <div className="flex gap-5 " key={index}>
          <Button text={`Ver Site`}  icon="" url={project.demoURL}/>
          <Button text={`Ver Prévia`}  icon="" url={project.url}/>
          </div>
        ))}
      </div>
    </section>
  )
}