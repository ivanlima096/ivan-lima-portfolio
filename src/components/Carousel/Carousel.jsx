import { Carousel } from "@material-tailwind/react";
import teste from "../../assets/teste.png";
import projects1 from "../../assets/Project 1/projects-1.png";
import projects1video from "../../assets/Project 1/project1video.mp4";
import projects2 from "../../assets/Project 2/projects-2.png";
import projects2video from "../../assets/Project 2/project2video.mp4";
import projects3 from "../../assets/Project 3/projects-3.png";
import projects3video from "../../assets/Project 3/project3video.mp4";
import projects4 from "../../assets/Project 4/projects-4.png";
import projects4video from "../../assets/Project 4/project4video.mp4";
import projects5 from "../../assets/Project 5/projects-5.png";
import projects5video from "../../assets/Project 5/project5video.mp4";
import projects6 from "../../assets/Project 6/project-6.png";
import projects6video from "../../assets/Project 6/project-6-video.mp4";
import Button from "../Button/Button";
import { BsEyeFill, BsArrowUpRightCircleFill } from "react-icons/bs";
import styles from "./Carousel.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

export const projects = [
  {
    name: "Site de Treino",
    photo: projects6,
    site: "https://ilo-cali.netlify.app/",
    demoURL: projects6video,
    githubURL: "https://github.com/ivanlima096/ILO_CALI",
    description: "Projeto React criado com o objetivo de praticar habilidades de desenvolvimento web com React, Context, Hooks e Tailwind, bem como utilizar no cotiadiano para facilitar meus treinos",
    technologies: "Javascript, React, CSS, Tailwind"
  },
  {
    name: "Tailwind Site",
    photo: projects1,
    site: "https://silver-salmiakki-1bb6ea.netlify.app/",
    demoURL: projects1video,
    githubURL: "https://github.com/ivanlima096/site-tailwind",
    description: "Projeto React criado com o objetivo de praticar habilidades de desenvolvimento web utilizando Tailwind CSS, componentização e a biblioteca react-typed. O site desenvolvido é uma aplicação interativa que demonstra a integração dessas tecnologias.",
    technologies: "Javascript, React, CSS, Tailwind, React-typed"
  },
  {
    name: "Mercado e carrinho com React",
    photo: projects2,
    site: "https://64e3e97e71082716e70c124a--effulgent-kringle-c9dc10.netlify.app/",
    demoURL: projects2video,
    githubURL: "https://github.com/ivanlima096/react-market",
    description: "Projeto React para praticar o desenvolvimento web com a API do Mercado Livre. Uma loja de produtos onde os usuários podem, Visualizar produtos disponíveis, Pesquisar produtos específicos, Adicionar e remover itens do carrinho de compras, Ver o total e quantidade de itens no carrinho.",
    technologies: "Javascript, React, CSS"
  },
  {
    name: "Galeria de Times",
    photo: projects3,
    site: "https://64e3ee224f99a21b3aebb573--vermillion-choux-a71b6d.netlify.app/",
    demoURL: projects3video,
    githubURL: "https://github.com/ivanlima096/team-gallery",
    description: "Projeto pessoal feito em React e react router dom. Utilização de vários hooks, inclusive um feito personalizado para otimização de produtividade. Utilização de diferentes rotas com createBrowserRouter e Link to. Props e useContext para transferência de informações de propriedades por todo o arquivo.",
    technologies: "Javascript, React, CSS, Router"
  },
  {
    name: "Apostas em Jockey",
    photo: projects4,
    site: "https://lighthearted-kitsune-e36d17.netlify.app/",
    demoURL: projects4video,
    githubURL: "https://github.com/ivanlima096/jockey-bets",
    description: "Projeto feito para praticar Javascript Vanilla com aplicação de funções e lógica de programação, baseado em Exercício do Livro 'Lógica de Programação e Algoritmos com Javascript' da editora Novatec.",
    technologies: "HTML, CSS, Bootstrap e JS"
  },
  {
    name: "Biblioteca de Filmes",
    photo: projects5,
    site: "https://64e3f316350b1d1dff77223c--bright-melomakarona-a63c51.netlify.app/",
    demoURL: projects5video,
    githubURL: "https://github.com/ivanlima096/movies-lib-tmdb-api",
    description: "Projeto feito para praticar React com criação de components, manipulações de dados com dados dinâmicos, estilização com CSS e uso de API da TMDB a partir de vídeo Matheus Battisti - Hora de Codar.",
    technologies: "CSS, Bootstrap e JS, React e APIs"
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
        className="rounded-xl mb-10 w-[82vw] lg:w-[80vw] bg-[#FFF] border-2 border-black md:w-[100%] shadow-2xl"
      >
        {projects.map((project, index) => (
          <div key={index} className="slide-container">
            <div
              className="h-auto w-[100%] aspect-video md:h-[65vh] md:aspect-auto flex flex-col md:flex-row gap-5 font-bold text-lg overflow-hidden">
              <img
                src={project.photo}
                alt={project.name}
                className="bg-black h-full w-full object-contain object-center"
              />
            </div>
            <div
              className='border-t-2 border-black bg-white flex flex-col items-center pt-8 pb-2 gap-6 font-bold text-lg justify-center md:flex-row md:justify-around md:gap-0'>
              <Button text={`Ver Site`} icon={<BsArrowUpRightCircleFill />} url={project.site} />
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
          projectVideo={project.demoURL}
          projectSite={project.site}

        />
      ))}
    </section>
  );
}
